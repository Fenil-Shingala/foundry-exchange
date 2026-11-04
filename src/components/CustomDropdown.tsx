"use client";

import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Check } from "lucide-react";

export interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
  description?: string;
}

export interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  direction?: "auto" | "top" | "bottom";
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  name?: string;
  disabled?: boolean;
  id?: string;
  "aria-label"?: string;
}

export default function CustomDropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  variant = "dark",
  size = "md",
  direction = "auto",
  className = "",
  buttonClassName = "",
  menuClassName = "",
  name,
  disabled = false,
  id,
  "aria-label": ariaLabel,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<"bottom" | "top">("bottom");
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const internalId = useId();
  const dropdownId = id || internalId;

  const selectedOption = options.find((opt) => opt.value === value);

  // Calculate position and placement of the portal menu relative to the trigger button
  const updatePosition = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const estimatedMenuHeight = Math.min(options.length * 42 + 24, 480);

    let resolvedPlacement: "top" | "bottom";
    if (direction === "top") {
      resolvedPlacement = "top";
    } else if (direction === "bottom") {
      resolvedPlacement = "bottom";
    } else {
      // "auto" — open upward if not enough space below and more space above
      resolvedPlacement =
        spaceBelow < estimatedMenuHeight && spaceAbove > spaceBelow
          ? "top"
          : "bottom";
    }

    const maxH =
      resolvedPlacement === "top"
        ? Math.min(480, Math.max(160, spaceAbove - 16))
        : Math.min(480, Math.max(160, spaceBelow - 16));

    const style: React.CSSProperties = {
      position: "fixed",
      left: rect.left,
      width: Math.max(rect.width, 280),
      maxWidth: `calc(100vw - 32px)`,
      maxHeight: maxH,
      zIndex: 99999,
    };

    if (resolvedPlacement === "top") {
      style.bottom = window.innerHeight - rect.top + 8;
      style.top = "auto";
    } else {
      style.top = rect.bottom + 8;
      style.bottom = "auto";
    }

    setPlacement(resolvedPlacement);
    setMenuStyle(style);
  }, [direction, options.length]);

  const toggleDropdown = () => {
    if (disabled) return;
    if (!isOpen) {
      updatePosition();
    }
    setIsOpen((prev) => !prev);
  };

  // Continuously reposition while open (scroll/resize)
  useEffect(() => {
    if (!isOpen) return;

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen, updatePosition]);

  // Close when clicked outside — must check both the trigger AND the portal menu
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideTrigger = dropdownRef.current?.contains(target);
      const clickedInsideMenu = listRef.current?.contains(target);

      if (!clickedInsideTrigger && !clickedInsideMenu) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Ensure scroll is reset to top whenever the dropdown opens
  useEffect(() => {
    if (isOpen && listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        updatePosition();
        setIsOpen(true);
        return;
      }
      const currentIndex = options.findIndex((opt) => opt.value === value);
      const nextIndex =
        e.key === "ArrowDown"
          ? (currentIndex + 1) % options.length
          : (currentIndex - 1 + options.length) % options.length;
      onChange(options[nextIndex].value);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown();
    }
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  // Size styling variants
  const sizeStyles = {
    sm: "py-2 pl-3 pr-8 text-xs",
    md: "py-2.5 pl-3.5 pr-9 text-xs sm:text-sm",
    lg: "py-3 pl-4 pr-10 text-sm",
  };

  // Theme variant styling
  const isDark = variant === "dark";

  const buttonBaseStyles = isDark
    ? "bg-navy-950 border-navy-700 text-slate-200 hover:border-navy-600 focus:border-brand focus:ring-1 focus:ring-brand shadow-inner"
    : "bg-slate-50/70 border-slate-300 text-navy hover:bg-white focus:border-cobalt focus:ring-1 focus:ring-cobalt";

  const menuBaseStyles = isDark
    ? "bg-navy-900 border-navy-700 text-slate-200 shadow-2xl divide-navy-800"
    : "bg-white border-slate-200 text-slate-700 shadow-xl divide-slate-100";

  // The portal-rendered dropdown menu
  const portalMenu =
    isOpen && typeof window !== "undefined"
      ? createPortal(
          <ul
            ref={listRef}
            role="listbox"
            tabIndex={-1}
            aria-activedescendant={value}
            className={`overflow-y-auto custom-scrollbar rounded-xl border p-1.5 backdrop-blur-md focus:outline-hidden shadow-2xl ${
              placement === "top" ? "origin-bottom" : "origin-top"
            } ${menuBaseStyles} ${menuClassName}`}
            style={menuStyle}
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <li
                  key={option.value}
                  id={`${dropdownId}-opt-${option.value}`}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option.value)}
                  className={`group flex items-center justify-between rounded-lg px-3.5 py-2.5 text-xs sm:text-sm cursor-pointer transition-colors ${
                    isSelected
                      ? isDark
                        ? "bg-brand/15 text-brand font-bold border-l-2 border-brand pl-2.5"
                        : "bg-red-50 text-brand font-bold border-l-2 border-brand pl-2.5"
                      : isDark
                        ? "text-slate-200 hover:bg-navy-800 hover:text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-navy"
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    {option.icon && (
                      <span className="shrink-0">{option.icon}</span>
                    )}
                    <span className="truncate">{option.label}</span>
                  </div>

                  {isSelected ? (
                    <Check
                      className="h-4 w-4 text-brand shrink-0 ml-3"
                      aria-hidden="true"
                    />
                  ) : option.badge ? (
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ml-2 ${
                        isDark
                          ? "bg-navy-800 text-slate-400"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {option.badge}
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ul>,
          document.body,
        )
      : null;

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block w-full text-left select-none ${className}`}
      onKeyDown={handleKeyDown}
    >
      {/* Hidden input for form submission */}
      {name && <input type="hidden" name={name} value={value} />}

      {/* Dropdown Trigger Button */}
      <button
        ref={buttonRef}
        id={dropdownId}
        type="button"
        disabled={disabled}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel || selectedOption?.label || placeholder}
        className={`group relative flex w-full items-center justify-between rounded-lg border font-medium transition-all duration-150 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 ${sizeStyles[size]} ${buttonBaseStyles} ${buttonClassName}`}
      >
        <span className="flex items-center gap-2 truncate">
          {selectedOption?.icon && (
            <span className="shrink-0">{selectedOption.icon}</span>
          )}
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>

        {/* Custom Industrial Chevron Icon */}
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 transition-transform duration-200">
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen
                ? "rotate-180 text-brand"
                : isDark
                  ? "text-slate-400 group-hover:text-slate-200"
                  : "text-slate-400 group-hover:text-navy"
            }`}
            aria-hidden="true"
          />
        </span>
      </button>

      {/* Dropdown menu rendered via Portal to document.body — bypasses all parent overflow/stacking */}
      {portalMenu}
    </div>
  );
}
