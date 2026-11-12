"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Tag,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Truck,
  RotateCcw,
  FileText,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  Lock,
  ExternalLink,
  X,
  ZoomIn,
} from "lucide-react";
import { ProductListing, featuredListings } from "@/data/listings";

interface ProductDetailPageProps {
  initialListing?: ProductListing;
}

export default function ProductDetailPage({ initialListing }: ProductDetailPageProps) {
  // Fallback to fl-001 (Heavy-Duty Pump Volute Casing) if not specified
  const listing = initialListing || featuredListings[0];

  // Metallurgy / Variant state (matches circular swatches on reference site)
  const variants = [
    {
      id: "ductile-65",
      name: "ASTM A536 65-45-12 (Ductile Iron)",
      short: "Ductile 65-45-12",
      badge: "Standard OEM Spec",
      priceOffset: 0,
      image: "/images/gallery/volute-casing-machined.jpg",
      swatchColor: "#64748b",
    },
    {
      id: "gray-35",
      name: "ASTM A48 Class 35 (High-Damping Gray Iron)",
      short: "Gray Iron Cl. 35",
      badge: "Vibration Damping",
      priceOffset: -280,
      image: "/images/gallery/cnc-machining-operation.jpg",
      swatchColor: "#475569",
    },
    {
      id: "carbon-wcb",
      name: "ASTM A216 WCB (High-Pressure Cast Carbon Steel)",
      short: "Cast Steel WCB",
      badge: "Pressure Vessel",
      priceOffset: 450,
      image: "/images/gallery/ndt-ultrasonic-testing.jpg",
      swatchColor: "#334155",
    },
    {
      id: "stainless-cf8m",
      name: "ASTM A351 CF8M / 316 (Marine Stainless Steel)",
      short: "316 Stainless",
      badge: "Acid / Corrosive",
      priceOffset: 890,
      image: "/images/gallery/packaging-dispatch.jpg",
      swatchColor: "#94a3b8",
    },
  ];

  // Size / Port rating options (matches square size buttons on reference site)
  const sizes = [
    { id: "dn100", label: "DN100 (4\")", bore: "100 mm", pcd: "180 mm", weight: "320 kg", test: "25 bar" },
    { id: "dn150", label: "DN150 (6\")", bore: "150 mm", pcd: "240 mm", weight: "480 kg", test: "25 bar" },
    { id: "dn200", label: "DN200 (8\")", bore: "200 mm", pcd: "295 mm", weight: "690 kg", test: "25 bar" },
    { id: "dn250", label: "DN250 (10\")", bore: "250 mm", pcd: "355 mm", weight: "890 kg", test: "30 bar" },
    { id: "dn300", label: "DN300 (12\")", bore: "300 mm", pcd: "410 mm", weight: "1,150 kg", test: "30 bar" },
  ];



  // Gallery images (2-column grid below video)
  const galleryImages = [
    {
      src: "/images/gallery/volute-casing-machined.jpg",
      alt: "Machined Volute Casing on Granite Table",
      caption: "Angle 01 • Finished CNC Machined Casing",
      badge: "ISO 8062 CT5",
    },
    {
      src: "/images/gallery/cnc-machining-operation.jpg",
      alt: "5-Axis CNC Milling Operation with Coolant",
      caption: "Angle 02 • 5-Axis Precision Flange Facing",
      badge: "Machining Floor",
    },
    {
      src: "/images/gallery/ndt-ultrasonic-testing.jpg",
      alt: "Ultrasonic NDT QA Testing with Digital Flaw Detector",
      caption: "Angle 03 • Volumetric Ultrasonic Inspection",
      badge: "ASTM A388 UT Cl. 1",
    },
    {
      src: "/images/gallery/packaging-dispatch.jpg",
      alt: "Export Wooden Crate Packaging with VCI Wrap",
      caption: "Angle 04 • ISPM-15 Heat-Treated Export Crate",
      badge: "FOB Dispatch Ready",
    },
    {
      src: "/images/capabilities/metal-casting.jpg",
      alt: "Overhead Ladle Pouring Molten Iron into Mold",
      caption: "Angle 05 • Induction Melt Pour Deck",
      badge: "1420°C Inoculation",
    },
    {
      src: "/images/capabilities/precision-forging.jpg",
      alt: "Heavy Industrial Hydraulic Press Forging",
      caption: "Angle 06 • Companion Heavy Forge Line",
      badge: "2000T Hydraulic Press",
    },
  ];

  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[1]); // Default DN150
  const [quantity, setQuantity] = useState(1);
  const [cartSuccess, setCartSuccess] = useState(false);

  // Fancybox / Lightbox state
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveModalIndex(index);
  };

  const closeLightbox = () => {
    setActiveModalIndex(null);
  };

  const showNextImage = () => {
    setActiveModalIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  };

  const showPrevImage = () => {
    setActiveModalIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  };

  // Keyboard navigation (Esc to close, Arrow keys to navigate)
  useEffect(() => {
    if (activeModalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        setActiveModalIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      } else if (e.key === "ArrowLeft") {
        setActiveModalIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalIndex, galleryImages.length]);

  // Video player state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);

  // Pricing calculation
  const basePrice = 2850 + selectedVariant.priceOffset;
  const listPrice = Math.round(basePrice * 1.48);

  // Volume discount calculation (Buy 2+ get 10% OFF, Buy 4+ get 15% OFF)
  let discountPercent = 0;
  if (quantity >= 4) {
    discountPercent = 15;
  } else if (quantity >= 2) {
    discountPercent = 10;
  }
  const effectiveUnitPrice = Math.round(basePrice * (1 - discountPercent / 100));
  const totalPrice = effectiveUnitPrice * quantity;

  // Toggle video playback
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const progress = (videoRef.current.currentTime / (videoRef.current.duration || 1)) * 100;
    setVideoProgress(progress);
  };

  const handleAddToCart = () => {
    setCartSuccess(true);
    setTimeout(() => setCartSuccess(false), 3500);
  };

  return (
    <div className="bg-white min-h-screen text-slate-800">
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link href="/#marketplace" className="hover:text-navy transition-colors">Marketplace</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-slate-400">{listing.category}</span>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[280px] sm:max-w-md">{listing.title}</span>
          </nav>

          {/* ============================================================== */}
          {/* 2-COLUMN MAIN PRODUCT LAYOUT (Exact layout from reference site) */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
            
            {/* ============================================================ */}
            {/* LEFT COLUMN: VIDEO AT TOP + 2-COLUMN IMAGE GALLERY           */}
            {/* ============================================================ */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-6">
              
              {/* 1. VIDEO BEFORE THE IMAGES (Full-width in Left Column) */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-navy-950 shadow-xl group">
                <div className="relative aspect-16/9 w-full bg-navy-950 overflow-hidden">
                  <video
                    ref={videoRef}
                    poster="/images/gallery/volute-casing-machined.jpg"
                    loop
                    playsInline
                    muted={isMuted}
                    onTimeUpdate={handleTimeUpdate}
                    className="h-full w-full object-cover cursor-pointer"
                    onClick={togglePlay}
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>

                  {/* Dark Vignette Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-1 text-xs font-mono font-bold uppercase text-white shadow-md">
                      <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                      4K UHD • Shop Floor QA Video
                    </span>
                    <span className="rounded-md bg-navy-900/90 backdrop-blur-xs px-2.5 py-1 text-xs font-mono text-slate-200 border border-navy-700">
                      Duration: 0:45
                    </span>
                  </div>

                  {/* Center Play Button Overlay (when paused) */}
                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/90 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-brand cursor-pointer z-10"
                      aria-label="Play video"
                    >
                      <Play className="h-7 w-7 translate-x-0.5 fill-white text-white" />
                    </button>
                  )}

                  {/* Bottom Video Controls Bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950/95 via-navy-950/70 to-transparent p-4 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? <Pause className="h-4 w-4 fill-white" /> : <Play className="h-4 w-4 fill-white translate-x-0.5" />}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </button>

                      <div className="font-mono text-[11px] text-slate-300">
                        <span>Live CNC Flange Machining &amp; Hydrotest</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Progress Bar */}
                      <div className="w-24 sm:w-36 h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand rounded-full transition-all duration-100"
                          style={{ width: `${videoProgress}%` }}
                        />
                      </div>
                      <span className="font-mono text-[11px] text-slate-300">1080p</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. 2-COLUMN IMAGE GALLERY (Exact layout as theartisanwalk.com) */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Component Visual Inspection Gallery (6 High-Resolution Views)
                  </h3>
                  <span className="text-[11px] text-slate-400">Click to expand</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openLightbox(idx)}
                      className="group relative aspect-4/5 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 35vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      {/* Zoom Hint Icon on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-navy-950/30 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-950/90 text-white px-3.5 py-1.5 text-xs font-semibold shadow-lg border border-white/20">
                          <ZoomIn className="h-4 w-4 text-brand" />
                          <span>View Full Size</span>
                        </span>
                      </div>

                      {/* Top Spec Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="rounded bg-navy-950/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-mono font-semibold text-white border border-navy-700/80 shadow-xs">
                          {img.badge}
                        </span>
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="absolute bottom-3 inset-x-3 text-white z-10">
                        <p className="text-xs font-medium text-slate-100 drop-shadow-xs line-clamp-1">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* RIGHT COLUMN: STICKY PRODUCT PURCHASE & SPECIFICATIONS PANEL */}
            {/* ============================================================ */}
            <div className="lg:col-span-5 xl:col-span-5 space-y-6">
              
              {/* Product Header & Title */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand bg-red-50 border border-brand/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verified Foundry Lot
                  </span>
                  <span className="text-xs text-slate-500 font-mono">ID: {listing.id}</span>
                </div>

                <h1 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-navy leading-tight">
                  {listing.title}
                </h1>

                {/* Rating & Review Counter */}
                <div className="mt-2.5 flex items-center gap-2 text-xs">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800">4.9 / 5.0</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 underline cursor-pointer hover:text-navy">
                    38 Certified Foundry Audits &amp; QA Reports
                  </span>
                </div>
              </div>

              {/* Price Block */}
              <div className="border-t border-b border-slate-200 py-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold font-heading text-navy">
                    ${effectiveUnitPrice.toLocaleString()}.00 <span className="text-base font-bold text-slate-500">USD</span>
                  </span>
                  <span className="text-lg font-medium text-slate-400 line-through">
                    ${listPrice.toLocaleString()}.00 USD
                  </span>
                  {discountPercent > 0 && (
                    <span className="rounded-md bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-mono font-bold">
                      {discountPercent}% OFF APPLIED
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Ex-Works / FOB Cleveland Port • Includes 3.1 Spectrometry MTR &amp; Hydrotest Certs
                </p>
              </div>

              {/* Volume Discount Promotion Banner (Exact match to theartisanwalk.com) */}
              <div className="rounded-lg bg-[#fdf2f2] border border-[#fecaca] p-3.5 text-xs text-slate-800">
                <div className="flex items-start gap-2.5">
                  <Tag className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap font-bold text-brand">
                      <span>Buy 2+ lots get 10% OFF</span>
                      <span className="text-slate-300">|</span>
                      <span>Buy 4+ lots get 15% OFF</span>
                      <span className="rounded bg-brand text-white px-1.5 py-0.2 text-[10px] font-mono">
                        Tier v
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-600">
                      Volume discount tier automatically applied in quote summary below.
                    </p>
                  </div>
                </div>
              </div>

              {/* Variant / Color Selector (Circular Swatches matching reference site) */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-bold text-slate-900">
                    Alloy Metallurgy: <span className="font-semibold text-brand">{selectedVariant.name}</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{selectedVariant.badge}</span>
                </div>

                <div className="flex items-center gap-3">
                  {variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`group relative flex h-11 w-11 items-center justify-center rounded-full p-0.5 transition-all cursor-pointer ${
                        selectedVariant.id === v.id
                          ? "ring-2 ring-navy ring-offset-2 scale-105"
                          : "ring-1 ring-slate-300 hover:ring-slate-400 opacity-80 hover:opacity-100"
                      }`}
                      title={v.name}
                    >
                      <span
                        className="h-full w-full rounded-full border border-white/40 shadow-inner flex items-center justify-center text-[10px] font-bold text-white font-mono"
                        style={{ backgroundColor: v.swatchColor }}
                      >
                        {v.short.split(" ")[0].slice(0, 2)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size / Flange Rating Selector (Square Boxes matching reference site) */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-bold text-slate-900">
                    Port Flange Size: <span className="font-semibold text-navy">{selectedSize.label}</span>
                  </span>
                  <a
                    href="#spec-table"
                    className="text-[11px] text-brand hover:underline font-semibold"
                  >
                    View Dimension Chart
                  </a>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`rounded-lg py-2.5 px-3 text-center text-xs font-bold uppercase transition-all cursor-pointer border ${
                        selectedSize.id === s.id
                          ? "border-navy bg-navy text-white shadow-sm"
                          : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper & Stock Urgency Indicator */}
              <div>
                <div className="text-xs font-bold text-slate-900 mb-2">Quantity</div>
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center rounded-lg border border-slate-300 bg-white shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2 text-slate-600 hover:text-navy hover:bg-slate-100 transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-12 text-center text-sm font-bold font-mono text-slate-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-2 text-slate-600 hover:text-navy hover:bg-slate-100 transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Only 3 ready-stock lots left in Cleveland, OH warehouse</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons (Matching Reference Site layout) */}
              <div className="space-y-2.5 pt-2">
                {/* 1. Add to Cart / RFQ */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full rounded-lg border-2 border-slate-900 bg-white py-3.5 px-6 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Add to RFQ Cart</span>
                  <span className="font-mono text-xs opacity-75">(${totalPrice.toLocaleString()}.00)</span>
                </button>

                {/* 2. Buy Now / Instant Purchase */}
                <Link
                  href="/#contact-form"
                  className="w-full rounded-lg bg-navy py-3.5 px-6 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-navy-light transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  <span>Request Instant Escrow Quote</span>
                </Link>

                {/* 3. Third-party Express / Wire (Yellow button matching PayPal in reference) */}
                <a
                  href="http://foundrydrawings.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-lg bg-[#ffc439] hover:bg-[#f4bb34] py-3 px-6 text-center text-xs sm:text-sm font-extrabold text-navy-950 transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Upload Custom Drawing (foundrydrawings.com)</span>
                </a>
              </div>

              {/* Cart Feedback Toast */}
              {cartSuccess && (
                <div className="rounded-lg bg-emerald-50 border border-emerald-300 p-3 text-xs text-emerald-800 flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Successfully added {quantity}x lot ({selectedSize.label}) to your technical inquiry basket!</span>
                </div>
              )}

              {/* Dispatch Estimate Banner (Matches Pink/Salmon banner on reference site) */}
              <div className="rounded-lg bg-[#fef2f2] border border-[#fecaca] p-3 text-xs text-slate-700 flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-brand shrink-0" />
                <span>
                  Order today, estimated dispatch: <strong>Nov 20 – Nov 28</strong> • Port FOB Cleveland / Flatbed Rail
                </span>
              </div>

              {/* ========================================================== */}
              {/* EDITORIAL CONTENT CARDS (Matching Right Column from Reference) */}
              {/* ========================================================== */}
              
              {/* 1. Dark Editorial Guide Box */}
              <div className="rounded-xl bg-navy-950 text-white p-5 sm:p-6 shadow-md border border-navy-800">
                <span className="inline-block rounded bg-amber-400 text-navy-950 px-2 py-0.5 text-[10px] font-mono font-extrabold uppercase tracking-wider mb-2">
                  US Industrial Gear &amp; Metallurgy Guide
                </span>
                <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-white leading-snug">
                  Why Mechanical Engineers &amp; Plant Operators Choose Cast Ductile Iron Over Bulky Welded Fabrications
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-sans">
                  Unlike welded pipe assemblies with high heat-affected zone (HAZ) stress concentrations, single-piece ductile iron castings feature continuous smooth hydrodynamic radii that eliminate cavitation, dampen high-frequency pump vibrations by 40%, and resist fatigue cracking under 24/7 continuous operation.
                </p>
              </div>

              {/* 2. Problem-Solving Callout Box (Matches reference site's "FRUSTRATED..." box) */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-2xs">
                <h4 className="font-heading text-base font-extrabold uppercase text-slate-900 tracking-tight mb-3">
                  Frustrated With Foundry Castings That Don&apos;t Live Up to Factory Spec?
                </h4>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand font-bold text-[10px] mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900">Subsurface Gas Shrinkage &amp; Porosity:</strong> Low-cost foundries skip riser feeding calculations, resulting in internal voids during machining. Every lot on Foundry Exchange is pre-screened with ASTM E94 Level II Radiographic verification.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand font-bold text-[10px] mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900">Missing or Inaccurate Mill Test Certs:</strong> Brokers often provide unverified paper certs. We enforce direct digital optical emission spectrometry (OES) reports with batch heat numbers.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand font-bold text-[10px] mt-0.5">✕</span>
                    <div>
                      <strong className="text-slate-900">Warped Datum Faces &amp; Bolt Misalignment:</strong> Manual machining results in leaking flanges. Our suppliers use automated 5-axis CNC machining centers holding ISO 8062 CT5 tolerances.
                    </div>
                  </li>
                </ul>
              </div>

              {/* 3. Feature Deep-Dive Cards (Matches FEATURE 01, 02, 03 from reference) */}
              <div className="space-y-4">
                {/* Feature 01 */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand block mb-1">
                    FEATURE 01
                  </span>
                  <h5 className="font-heading text-sm sm:text-base font-bold uppercase text-slate-900">
                    Certified Ductile Iron Spheroidal Graphite Microstructure
                  </h5>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Treated with precise magnesium ferrosilicon inoculation, transforming graphite flakes into spherical nodules (&gt;85% nodularity). Delivers 400 MPa tensile strength with 15% elongation.
                  </p>
                  <div
                    onClick={() => openLightbox(0)}
                    className="group/feat relative mt-3 h-44 w-full rounded-lg overflow-hidden border border-slate-200 cursor-zoom-in hover:shadow-md transition-all"
                    title="Click to view full size in Fancybox"
                  >
                    <Image
                      src="/images/gallery/volute-casing-machined.jpg"
                      alt="Microstructure quality inspection"
                      fill
                      className="object-cover transition-transform duration-300 group-hover/feat:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/feat:opacity-100 transition-opacity bg-navy-950/20 backdrop-blur-[1px]">
                      <span className="inline-flex items-center gap-1 rounded-full bg-navy-950/80 text-white px-2.5 py-1 text-[11px] font-semibold">
                        <ZoomIn className="h-3.5 w-3.5 text-brand" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feature 02 */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand block mb-1">
                    FEATURE 02
                  </span>
                  <h5 className="font-heading text-sm sm:text-base font-bold uppercase text-slate-900">
                    100% Hydrostatic Pressure Containment to 25 Bar
                  </h5>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Each casing is hydrostatically proof-tested at 1.5x working pressure for a minimum 15-minute hold time with zero pressure drop or weeping, verified by QA inspector stamp.
                  </p>
                  <div
                    onClick={() => openLightbox(2)}
                    className="group/feat relative mt-3 h-44 w-full rounded-lg overflow-hidden border border-slate-200 cursor-zoom-in hover:shadow-md transition-all"
                    title="Click to view full size in Fancybox"
                  >
                    <Image
                      src="/images/gallery/ndt-ultrasonic-testing.jpg"
                      alt="Hydrotest and Ultrasonic QA Inspection"
                      fill
                      className="object-cover transition-transform duration-300 group-hover/feat:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/feat:opacity-100 transition-opacity bg-navy-950/20 backdrop-blur-[1px]">
                      <span className="inline-flex items-center gap-1 rounded-full bg-navy-950/80 text-white px-2.5 py-1 text-[11px] font-semibold">
                        <ZoomIn className="h-3.5 w-3.5 text-brand" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feature 03 */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand block mb-1">
                    FEATURE 03
                  </span>
                  <h5 className="font-heading text-sm sm:text-base font-bold uppercase text-slate-900">
                    Precision 5-Axis CNC Machined Flange Serrations
                  </h5>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Machined with phonographic spiral serration (Ra 3.2–6.3μm) matching ASME B16.5 gasket sealing requirements to ensure zero fluid bypass in high-pressure piping loops.
                  </p>
                  <div
                    onClick={() => openLightbox(1)}
                    className="group/feat relative mt-3 h-44 w-full rounded-lg overflow-hidden border border-slate-200 cursor-zoom-in hover:shadow-md transition-all"
                    title="Click to view full size in Fancybox"
                  >
                    <Image
                      src="/images/gallery/cnc-machining-operation.jpg"
                      alt="Precision 5-Axis CNC Milling"
                      fill
                      className="object-cover transition-transform duration-300 group-hover/feat:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/feat:opacity-100 transition-opacity bg-navy-950/20 backdrop-blur-[1px]">
                      <span className="inline-flex items-center gap-1 rounded-full bg-navy-950/80 text-white px-2.5 py-1 text-[11px] font-semibold">
                        <ZoomIn className="h-3.5 w-3.5 text-brand" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Engineering Specifications Table (Matches reference site's Size Guide table) */}
              <div id="spec-table" className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                <div className="mb-3">
                  <h5 className="font-heading text-sm sm:text-base font-bold uppercase text-slate-900">
                    Size Guide &amp; Engineering Specifications (US &amp; ISO Standard)
                  </h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Standard ANSI Class 150 / ISO PN16 flange drillings. Custom CAD port geometries available on request.
                  </p>
                </div>

                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-navy-950 text-white font-mono text-[10px] uppercase tracking-wider">
                        <th className="py-2.5 px-3">Size</th>
                        <th className="py-2.5 px-3">Bore (mm)</th>
                        <th className="py-2.5 px-3">Flange PCD</th>
                        <th className="py-2.5 px-3">Weight</th>
                        <th className="py-2.5 px-3">Hydrotest</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-sans text-slate-700">
                      {sizes.map((s) => (
                        <tr
                          key={s.id}
                          className={`transition-colors ${selectedSize.id === s.id ? "bg-red-50/80 font-bold text-navy" : "hover:bg-slate-50"}`}
                        >
                          <td className="py-2 px-3 font-semibold text-slate-900">{s.label}</td>
                          <td className="py-2 px-3 font-mono">{s.bore}</td>
                          <td className="py-2 px-3 font-mono">{s.pcd}</td>
                          <td className="py-2 px-3 font-mono">{s.weight}</td>
                          <td className="py-2 px-3 font-mono text-emerald-700 font-bold">{s.test}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Governing Standard: ASTM A536 / ISO 1083</span>
                  <a href="#contact-form" className="text-brand font-semibold hover:underline">
                    Request Custom Machining Tolerance
                  </a>
                </div>
              </div>

              {/* Trust Badges Footer */}
              <div className="border-t border-slate-200 pt-5 grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Escrow Buyer Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Flatbed Rail &amp; Ocean Freight</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-navy shrink-0" />
                  <span>EN 10204 3.1 Certified MTR</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Non-Destructive NDT Testing</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* FULL-SIZE IMAGE FANCYBOX / LIGHTBOX MODAL                        */}
      {/* ================================================================ */}
      {activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between bg-navy-950/95 backdrop-blur-md p-3 sm:p-6 transition-all duration-200 select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Full size inspection photo"
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div
            className="flex items-center justify-between z-20 pb-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="rounded bg-brand px-2.5 py-1 text-[11px] font-mono font-bold text-white uppercase tracking-wider shadow-sm">
                {galleryImages[activeModalIndex].badge}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white font-mono truncate max-w-[200px] sm:max-w-md">
                {galleryImages[activeModalIndex].caption}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">
                {activeModalIndex + 1} / {galleryImages.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand text-white transition-all cursor-pointer shadow-lg"
                aria-label="Close full size view"
                title="Press Esc to close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Stage: Full Size Photo + Prev/Next Controls */}
          <div
            className="relative flex-1 flex items-center justify-center p-2 sm:p-4 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={showPrevImage}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-navy-900/80 hover:bg-brand text-white transition-all border border-white/20 shadow-2xl cursor-pointer z-30"
              aria-label="Previous image"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Full-Size Image Container */}
            <div className="relative h-full w-full max-h-[76vh] max-w-[88vw] flex items-center justify-center">
              <Image
                src={galleryImages[activeModalIndex].src}
                alt={galleryImages[activeModalIndex].alt}
                fill
                sizes="95vw"
                priority
                className="object-contain drop-shadow-2xl transition-all duration-300"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-navy-900/80 hover:bg-brand text-white transition-all border border-white/20 shadow-2xl cursor-pointer z-30"
              aria-label="Next image"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>

          {/* Bottom Bar: Detailed Spec Caption & Miniature Thumbnails */}
          <div
            className="z-20 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs text-slate-300 font-sans text-center sm:text-left truncate min-w-0 flex-1 max-w-xl">
              {galleryImages[activeModalIndex].alt} • Pre-audited Lot Certification
            </p>

            {/* Thumbnail Navigation Row */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full shrink-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveModalIndex(idx)}
                  className={`relative h-11 w-11 sm:h-13 sm:w-13 shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activeModalIndex === idx
                      ? "border-brand scale-105 ring-2 ring-brand/50 shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Jump to ${img.caption}`}
                >
                  <Image src={img.src} alt={img.alt} fill sizes="56px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
