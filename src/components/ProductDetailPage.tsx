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
  MapPin,
  Building2,
  Award,
} from "lucide-react";
import { ProductListing, featuredListings } from "@/data/listings";
import { getProductDetailData, DetailVariant, DetailSizeOption } from "@/data/productDetailHelper";

interface ProductDetailPageProps {
  initialListing?: ProductListing;
}

export default function ProductDetailPage({ initialListing }: ProductDetailPageProps) {
  // Fallback to fl-001 if not specified
  const listing = initialListing || featuredListings[0];
  const detailData = getProductDetailData(listing);

  const variants = detailData.variants;
  const sizes = detailData.sizes;
  const galleryImages = detailData.galleryImages;

  const [selectedVariant, setSelectedVariant] = useState<DetailVariant>(variants[0]);
  const [selectedSize, setSelectedSize] = useState<DetailSizeOption>(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [cartSuccess, setCartSuccess] = useState(false);

  // When listing changes, update selected variant and size
  useEffect(() => {
    setSelectedVariant(detailData.variants[0]);
    setSelectedSize(detailData.sizes[0]);
    setQuantity(1);
  }, [listing.id]);

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

  // Sticky Bottom Pinning for Left Gallery Column
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const [stickyTop, setStickyTop] = useState<string>("auto");

  useEffect(() => {
    const updateSticky = () => {
      if (leftColRef.current && window.innerWidth >= 1024) {
        const h = leftColRef.current.offsetHeight;
        const vh = window.innerHeight;
        if (h > vh) {
          setStickyTop(`calc(100vh - ${h}px - 24px)`);
        } else {
          setStickyTop("88px");
        }
      } else {
        setStickyTop("auto");
      }
    };

    updateSticky();
    window.addEventListener("resize", updateSticky);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && leftColRef.current) {
      ro = new ResizeObserver(updateSticky);
      ro.observe(leftColRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateSticky);
      if (ro) ro.disconnect();
    };
  }, [listing.id]);

  // Pricing calculation
  const basePrice = detailData.parsedBasePrice + selectedVariant.priceOffset;
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
    <div className="bg-[#f7f8fa] min-h-screen text-slate-800 antialiased font-sans pb-24">
      {/* ============================================================ */}
      {/* TOP NAVIGATION / BREADCRUMB BAR                              */}
      {/* ============================================================ */}
      <div className="bg-white border-b border-slate-200">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <Link href="/" className="hover:text-brand transition-colors shrink-0">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
            <Link href="/#marketplace" className="hover:text-brand transition-colors shrink-0">Marketplace</Link>
            <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
            <span className="text-slate-400 shrink-0">{listing.category}</span>
            <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold truncate max-w-[280px] sm:max-w-md">{listing.title}</span>
          </nav>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MAIN TWO-COLUMN CONTAINER                                    */}
      {/* ============================================================ */}
      <main className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-6 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">

          {/* ============================================================ */}
          {/* LEFT COLUMN: VIDEO AT TOP + 2-COLUMN IMAGE GALLERY           */}
          {/* ============================================================ */}
          <div
            ref={leftColRef}
            className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-6 lg:sticky"
            style={{ top: stickyTop }}
          >
            {/* 1. VIDEO BEFORE THE IMAGES (Full-width in Left Column) */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-navy-950 shadow-xl group">
              <div className="relative aspect-16/9 w-full bg-navy-950 overflow-hidden">
                <video
                  ref={videoRef}
                  poster={detailData.videoPoster}
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

                {/* Top Badges — Responsive for mobile & desktop */}
                <div className="absolute top-3 inset-x-3 sm:top-4 sm:inset-x-4 flex items-center justify-between pointer-events-none z-10">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full sm:rounded-md bg-brand px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-mono font-bold uppercase text-white shadow-md">
                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white animate-pulse" />
                    <span>4K UHD<span className="hidden sm:inline"> • Shop Floor QA Video</span></span>
                  </span>
                  <span className="rounded-full sm:rounded-md bg-navy-900/90 backdrop-blur-xs px-2.5 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-mono text-slate-200 border border-navy-700/80 shadow-xs">
                    <span className="hidden sm:inline">Duration: </span>0:45
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto flex h-13 w-13 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-brand/90 hover:bg-brand text-white shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer z-10"
                    aria-label="Play video"
                  >
                    <Play className="h-5 w-5 sm:h-7 sm:w-7 translate-x-0.5 fill-white text-white" />
                  </button>
                )}

                {/* Bottom Video Controls Bar — Responsive single-line layout */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950/95 via-navy-950/70 to-transparent pt-6 pb-2.5 px-3 sm:px-4 sm:pb-3 flex flex-col justify-end text-white text-xs z-10">
                  <div className="flex items-center justify-between gap-2 pb-1.5">
                    {/* Left: Play/Pause, Mute & Title */}
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? (
                          <Pause className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white" />
                        ) : (
                          <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white translate-x-0.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        ) : (
                          <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        )}
                      </button>

                      <div className="font-mono text-[10px] sm:text-[11px] text-slate-300 truncate">
                        <span className="hidden sm:inline">{detailData.videoTitle}</span>
                        <span className="sm:hidden font-medium">{listing.title}</span>
                      </div>
                    </div>

                    {/* Right: Quality Badge */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-[9px] sm:text-[11px] px-1.5 py-0.5 rounded bg-white/10 text-slate-200 border border-white/15">
                        1080p
                      </span>
                    </div>
                  </div>

                  {/* Clean Full-Width Scrub / Progress Bar */}
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand rounded-full transition-all duration-100"
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 2-COLUMN IMAGE GALLERY */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Component Visual Inspection Gallery (6 High-Resolution Views)
                </h3>
                <span className="text-[11px] text-slate-400">Click to expand</span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {galleryImages.map((img, idx) => (
                  <div
                    key={img.caption + idx}
                    onClick={() => openLightbox(idx)}
                    className="group relative aspect-4/3 overflow-hidden rounded-xl border border-slate-200 bg-navy-950 cursor-zoom-in shadow-xs hover:shadow-xl hover:border-brand transition-all duration-200"
                    title="Click to view high-resolution full size"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 35vw"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.srcset = "";
                        target.src = "/images/fallback-product.jpg";
                      }}
                    />

                    {/* Badge Pill — z-20 above overlay so it never gets blurred */}
                    <span className="absolute top-2.5 left-2.5 z-20 rounded bg-navy-950/90 px-2 py-0.5 text-[10px] font-mono font-bold uppercase text-white border border-white/20 shadow-xs pointer-events-none">
                      {img.badge}
                    </span>

                    {/* Bottom Caption Overlay — z-20 above overlay so text is 100% crisp and readable */}
                    <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-navy-950/95 via-navy-950/70 to-transparent p-2.5 pt-6 text-white pointer-events-none">
                      <p className="text-[11px] font-mono text-slate-100 font-medium truncate">
                        {img.caption}
                      </p>
                    </div>

                    {/* Hover Zoom Icon — z-10 behind text, NO backdrop-blur to prevent text blurring */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-navy-950/20 pointer-events-none">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/95 text-white shadow-xl transform transition-transform duration-200 group-hover:scale-110">
                        <ZoomIn className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Audit Trust Ribbon */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <div className="grid grid-cols-3 divide-x divide-slate-200 text-center text-xs">
                <div className="px-2">
                  <div className="font-bold text-navy font-heading text-sm sm:text-base">100% UT</div>
                  <div className="text-[11px] text-slate-500 font-mono">Volumetric Scan</div>
                </div>
                <div className="px-2">
                  <div className="font-bold text-emerald-700 font-heading text-sm sm:text-base">EN 10204 3.1</div>
                  <div className="text-[11px] text-slate-500 font-mono">Digital Mill Test Cert</div>
                </div>
                <div className="px-2">
                  <div className="font-bold text-brand font-heading text-sm sm:text-base">ISO 9001</div>
                  <div className="text-[11px] text-slate-500 font-mono">Pre-Audited Plant</div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: PRODUCT INFO & SPECIFICATIONS                   */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">

              {/* Header Info */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 text-brand border border-brand/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
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
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-3xl font-extrabold font-heading text-navy">
                    ${effectiveUnitPrice.toLocaleString()}.00 <span className="text-base font-bold text-slate-500">{detailData.priceSuffix}</span>
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
                  Ex-Works / FOB {listing.location} • Includes 3.1 Spectrometry MTR &amp; QA Inspection Certs
                </p>
              </div>

              {/* Volume Discount Promotion Banner */}
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

              {/* Variant / Alloy Selector */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-bold text-slate-900">
                    Alloy / Grade: <span className="font-semibold text-brand">{selectedVariant.name}</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{selectedVariant.badge}</span>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
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

              {/* Size / Dimension Tier Selector */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-bold text-slate-900">
                    Specification Tier: <span className="font-semibold text-navy">{selectedSize.label}</span>
                  </span>
                  <a
                    href="#spec-table"
                    className="text-[11px] text-brand hover:underline font-semibold"
                  >
                    View Dimension Chart
                  </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`rounded-lg py-2 px-3 text-center text-xs font-bold uppercase transition-all cursor-pointer border ${
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
                <div className="flex items-center gap-4 flex-wrap">
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
                    <span>{listing.leadTime} • {listing.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full rounded-lg border-2 border-slate-900 bg-white py-3.5 px-6 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Add to RFQ Cart</span>
                  <span className="font-mono text-xs opacity-75">(${totalPrice.toLocaleString()}.00)</span>
                </button>

                <Link
                  href="/#contact-form"
                  className="w-full rounded-lg bg-navy py-3.5 px-6 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-navy-light transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  <span>Request Instant Escrow Quote</span>
                </Link>

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

              {/* Dispatch Estimate Banner */}
              <div className="rounded-lg bg-[#fef2f2] border border-[#fecaca] p-3 text-xs text-slate-700 flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-brand shrink-0" />
                <span>
                  Status: <strong>{listing.status}</strong> • Origin: {listing.location} ({listing.vendorName})
                </span>
              </div>

              {/* ========================================================== */}
              {/* EDITORIAL CONTENT CARDS (Specific to Product)              */}
              {/* ========================================================== */}
              
              {/* 1. Dark Editorial Guide Box */}
              <div className="rounded-xl bg-navy-950 text-white p-5 sm:p-6 shadow-md border border-navy-800">
                <span className="inline-block rounded bg-amber-400 text-navy-950 px-2 py-0.5 text-[10px] font-mono font-extrabold uppercase tracking-wider mb-2">
                  {detailData.editorialBadge}
                </span>
                <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-white leading-snug">
                  {detailData.editorialTitle}
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-sans">
                  {detailData.editorialText}
                </p>
              </div>

              {/* 2. Problem-Solving Callout Box */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-2xs">
                <h4 className="font-heading text-base font-extrabold uppercase text-slate-900 tracking-tight mb-3">
                  {detailData.painPointsTitle}
                </h4>
                <ul className="space-y-3 text-xs text-slate-700">
                  {detailData.painPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand font-bold text-[10px] mt-0.5">✕</span>
                      <div>
                        <strong className="text-slate-900">{pt.title} </strong>
                        {pt.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Feature Deep-Dive Cards */}
              <div className="space-y-4">
                {detailData.features.map((feat, fIdx) => (
                  <div key={feat.number} className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand block mb-1">
                      {feat.number}
                    </span>
                    <h5 className="font-heading text-sm sm:text-base font-bold uppercase text-slate-900">
                      {feat.title}
                    </h5>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                    <div
                      onClick={() => openLightbox(fIdx % galleryImages.length)}
                      className="group/feat relative mt-3 h-44 w-full rounded-lg overflow-hidden border border-slate-200 cursor-zoom-in hover:shadow-md transition-all"
                      title="Click to view full size in Fancybox"
                    >
                      <Image
                        src={feat.image}
                        alt={feat.imageAlt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover/feat:scale-105"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.srcset = "";
                          target.src = "/images/fallback-product.jpg";
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/feat:opacity-100 transition-opacity bg-navy-950/20 pointer-events-none">
                        <span className="inline-flex items-center gap-1 rounded-full bg-navy-950/80 text-white px-2.5 py-1 text-[11px] font-semibold">
                          <ZoomIn className="h-3.5 w-3.5 text-brand" />
                          <span>Enlarge</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 4. Engineering Specifications Table */}
              <div id="spec-table" className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                <div className="mb-3">
                  <h5 className="font-heading text-sm sm:text-base font-bold uppercase text-slate-900">
                    Dimensional Capacity &amp; Engineering Specifications
                  </h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Governing Standards: {listing.standards.join(", ")}. Custom drawing adjustments available.
                  </p>
                </div>

                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-navy-950 text-white font-mono text-[10px] uppercase tracking-wider">
                        <th className="py-2.5 px-3">{detailData.sizeTableHeader[0]}</th>
                        <th className="py-2.5 px-3">{detailData.sizeTableHeader[1]}</th>
                        <th className="py-2.5 px-3">{detailData.sizeTableHeader[2]}</th>
                        <th className="py-2.5 px-3">{detailData.sizeTableHeader[3]}</th>
                        <th className="py-2.5 px-3">{detailData.sizeTableHeader[4]}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-sans text-slate-700">
                      {sizes.map((s) => (
                        <tr
                          key={s.id}
                          className={`transition-colors ${selectedSize.id === s.id ? "bg-red-50/80 font-bold text-navy" : "hover:bg-slate-50"}`}
                        >
                          <td className="py-2 px-3 font-semibold text-slate-900">{s.label}</td>
                          <td className="py-2 px-3 font-mono">{s.param1}</td>
                          <td className="py-2 px-3 font-mono">{s.param2}</td>
                          <td className="py-2 px-3 font-mono">{s.param3}</td>
                          <td className="py-2 px-3 font-mono text-emerald-700 font-bold">{s.param4}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Detailed Technical Metadata Specs */}
                <div className="mt-4 border-t border-slate-100 pt-3">
                  <h6 className="text-[11px] font-mono font-bold uppercase text-slate-500 mb-2">Technical Lot Specifications</h6>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {detailData.specRows.map((row, rIdx) => (
                      <div key={rIdx} className="p-2 rounded bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">{row.label}</div>
                        <div className={`font-semibold ${row.highlight ? "text-brand" : "text-navy"}`}>{row.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Vendor: {listing.vendorName}</span>
                  <a href="#contact-form" className="text-brand font-semibold hover:underline">
                    Request Custom Machining Tolerance
                  </a>
                </div>
              </div>

              {/* Trust Badges Footer */}
              <div className="border-t border-slate-200 pt-5 grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-brand shrink-0" />
                  <span>Insured Global Freight (FOB/CIF)</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4 text-brand shrink-0" />
                  <span>Dimensional Fit Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-brand shrink-0" />
                  <span>Full Heat Lot Traceability</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
                  <span>Verified Escrow Protection</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* ============================================================ */}
      {/* FANCYBOX / LIGHTBOX MODAL OVERLAY                            */}
      {/* ============================================================ */}
      {activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-md flex flex-col justify-between animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Modal Bar */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b border-white/10 text-white select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="rounded bg-brand px-2.5 py-0.5 text-xs font-mono font-bold uppercase tracking-wider text-white">
                {galleryImages[activeModalIndex].badge}
              </span>
              <span className="font-heading font-semibold text-sm sm:text-base text-slate-200">
                {galleryImages[activeModalIndex].caption}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-400">
                {activeModalIndex + 1} / {galleryImages.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close full size view"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Center Stage Image */}
          <div
            className="relative flex-1 min-h-0 flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={showPrevImage}
              className="absolute left-4 sm:left-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-brand text-white backdrop-blur-sm transition-all shadow-xl cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="relative max-h-[calc(100vh-230px)] max-w-[94vw] sm:max-w-[85vw] w-[1100px] h-[620px] flex items-center justify-center">
              <Image
                src={galleryImages[activeModalIndex].src}
                alt={galleryImages[activeModalIndex].alt}
                fill
                className="object-contain drop-shadow-2xl select-none"
                priority
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.srcset = "";
                  target.src = "/images/fallback-product.jpg";
                }}
              />
            </div>

            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-4 sm:right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-brand text-white backdrop-blur-sm transition-all shadow-xl cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip — Horizontally Centered Carousel with Active Pill & Captions */}
          <div
            className="border-t border-white/10 bg-navy-950/90 backdrop-blur-md px-6 py-3.5 flex flex-col items-center justify-center gap-2 select-none shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Centered Thumbnails Row (Scrollable on mobile) */}
            <div className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3 overflow-x-auto max-w-full px-2 py-1.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.caption + idx}
                  type="button"
                  onClick={() => setActiveModalIndex(idx)}
                  className={`group relative h-13 w-20 sm:h-15 sm:w-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    activeModalIndex === idx
                      ? "border-brand ring-2 ring-brand/50 scale-105 shadow-xl opacity-100 z-10"
                      : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/60 hover:scale-102"
                  }`}
                  title={img.caption}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.srcset = "";
                      target.src = "/images/fallback-product.jpg";
                    }}
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-navy-950/85 backdrop-blur-xs text-[9px] font-mono font-bold text-center text-slate-300 py-0.5 truncate px-1">
                    {img.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Centered Caption & Pre-Audited Verification */}
            <div className="text-[11px] sm:text-xs text-slate-400 font-mono text-center truncate max-w-3xl px-4">
              <span className="text-slate-200 font-semibold">{galleryImages[activeModalIndex].caption}</span>
              <span className="mx-2 text-slate-600 hidden md:inline">•</span>
              <span className="text-emerald-400 font-semibold hidden md:inline">Pre-audited Lot Certification ✓</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
