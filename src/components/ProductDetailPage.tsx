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
  Download,
  FileCheck,
  Layers,
  Microscope,
  Scale,
  Building,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Send,
  FileSpreadsheet,
  Boxes,
  FileCode,
  Sparkles,
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

  // Point 4: State for metallurgy tabs, technical docs, FAQs and RFQ form
  const [activeMetaTab, setActiveMetaTab] = useState<"chemical" | "mechanical" | "microstructure">("chemical");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [rfqForm, setRfqForm] = useState({
    targetQty: "5 units",
    deliveryPort: "Rotterdam / Houston (CIF)",
    customSpec: "",
    contactEmail: "",
  });

  const handleDownloadDoc = (docTitle: string, docFormat: string) => {
    setDownloadToast(`Preparing certified ${docFormat} package: "${docTitle}"`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 4000);
  };

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSubmitted(true);
    setTimeout(() => setRfqSubmitted(false), 5000);
  };

  // 8 companion/related products
  const sameCategory = featuredListings.filter((l) => l.id !== listing.id && l.category === listing.category);
  const otherCategories = featuredListings.filter((l) => l.id !== listing.id && l.category !== listing.category);
  const relatedListings = [...sameCategory, ...otherCategories].slice(0, 8);

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
      {/* Main Content Column with tight, clean side margins around side-rail ads */}
      <div className="w-full product-detail-wrapper transition-all duration-300">
        {/* ============================================================ */}
        {/* TOP NAVIGATION / BREADCRUMB BAR                              */}
        {/* ============================================================ */}
        <div className="bg-white border-b border-slate-200">
          <div className="w-full py-3">
            <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <Link href="/" className="hover:text-brand transition-colors shrink-0">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
              <Link href="/marketplace" className="hover:text-brand transition-colors shrink-0">Marketplace</Link>
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
        <main className="w-full pt-6 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">

          {/* ============================================================ */}
          {/* LEFT COLUMN: VIDEO AT TOP + 2-COLUMN IMAGE GALLERY           */}
          {/* ============================================================ */}
          <div
            ref={leftColRef}
            className="lg:col-span-6 xl:col-span-6 min-[1540px]:col-span-7 space-y-4 sm:space-y-6 lg:sticky"
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
                <div className="pointer-events-none absolute inset-0 bg-navy-950/30" />

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
                <div className="absolute bottom-0 inset-x-0 bg-navy-950/90 border-t border-navy-800 py-2.5 px-3 sm:px-4 flex flex-col justify-end text-white text-xs z-10">
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
                    <div className="absolute inset-x-0 bottom-0 z-20 bg-navy-950/90 border-t border-navy-800 p-2.5 text-white pointer-events-none">
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
                  <div className="font-bold text-cobalt font-heading text-sm sm:text-base">EN 10204 3.1</div>
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
          <div className="lg:col-span-6 xl:col-span-6 min-[1540px]:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs space-y-6">

              {/* Header Info */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 text-brand border border-brand/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verified Foundry Lot
                  </span>
                  <span className="text-xs text-slate-500 font-mono">ID: {listing.id}</span>
                </div>

                <h1 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-brand leading-tight">
                  {listing.title}
                </h1>

                {/* Rating & Review Counter */}
                <div className="mt-2.5 flex items-center gap-2 text-xs flex-wrap">
                  <div className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                    <div className="flex items-center text-brand">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                      ))}
                    </div>
                    <span className="font-bold text-slate-900 font-mono">4.9 / 5.0</span>
                  </div>
                  <span className="text-slate-300 shrink-0">•</span>
                  <a
                    href="#audit-dossier"
                    className="text-slate-500 hover:text-brand hover:underline transition-colors shrink-0"
                  >
                    38 Certified Foundry Audits &amp; QA Reports
                  </a>
                </div>
              </div>

              {/* Price Block */}
              <div className="border-t border-b border-slate-200 py-4">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-2xl sm:text-3xl font-extrabold font-heading text-navy whitespace-nowrap">
                    ${effectiveUnitPrice.toLocaleString()}.00 <span className="text-base font-bold text-slate-500">{detailData.priceSuffix}</span>
                  </span>
                  <span className="text-base sm:text-lg font-medium text-slate-400 line-through whitespace-nowrap">
                    ${listPrice.toLocaleString()}.00 USD
                  </span>
                  {discountPercent > 0 && (
                    <span className="rounded-md bg-red-50 text-brand border border-brand/20 px-2 py-0.5 text-xs font-mono font-bold whitespace-nowrap">
                      {discountPercent}% OFF APPLIED
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-xs text-slate-500">
                  Ex-Works / FOB {listing.location} • Includes 3.1 Spectrometry MTR &amp; QA Inspection Certs
                </p>
              </div>

              {/* Volume Discount Promotion Banner */}
              <div className="rounded-xl bg-red-50/80 border border-red-200/90 p-3 sm:p-3.5 text-xs text-slate-800">
                <div className="flex items-center gap-2 font-bold text-brand mb-2">
                  <Tag className="h-4 w-4 shrink-0" />
                  <span className="uppercase tracking-wider text-[11px] font-mono font-extrabold">Volume Discount Pricing</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-white border border-red-200/80 px-2.5 py-1.5 text-center shadow-2xs">
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Buy 2+ lots</div>
                    <div className="text-xs font-bold text-brand font-mono">10% OFF</div>
                  </div>
                  <div className="rounded-lg bg-white border border-red-200/80 px-2.5 py-1.5 text-center shadow-2xs">
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Buy 4+ lots</div>
                    <div className="text-xs font-bold text-brand font-mono">15% OFF</div>
                  </div>
                </div>
                <p className="mt-2 text-[11px] text-slate-600 font-sans">
                  Volume discount tier automatically calculated in quote summary below.
                </p>
              </div>

              {/* Variant / Alloy Selector */}
              <div>
                <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
                  <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] font-mono">
                    Alloy / Metallurgy Grade
                  </span>
                  {selectedVariant.badge && (
                    <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-mono font-bold text-slate-700 shrink-0 whitespace-nowrap">
                      {selectedVariant.badge}
                    </span>
                  )}
                </div>
                <div className="text-xs font-semibold text-brand leading-snug mb-3">
                  {selectedVariant.name}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`rounded-xl p-2.5 text-left transition-all cursor-pointer border flex flex-col justify-between ${
                        selectedVariant.id === v.id
                          ? "border-navy bg-navy text-white shadow-sm ring-1 ring-navy"
                          : "border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 text-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="h-3 w-3 rounded-full shrink-0 border border-white/40 shadow-2xs"
                          style={{ backgroundColor: v.swatchColor }}
                        />
                        <span className="font-bold text-xs font-mono truncate">{v.short}</span>
                      </div>
                      <div className="flex items-center justify-between gap-1 text-[10px]">
                        <span className={`truncate ${selectedVariant.id === v.id ? "text-slate-300" : "text-slate-500"}`}>
                          {v.badge}
                        </span>
                        {v.priceOffset > 0 && (
                          <span className={`font-mono font-bold shrink-0 ${selectedVariant.id === v.id ? "text-white" : "text-brand"}`}>
                            +${v.priceOffset}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size / Dimension Tier Selector */}
              <div>
                <div className="flex items-center justify-between gap-2 text-xs mb-2">
                  <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] font-mono">
                    Specification Tier: <span className="text-navy font-bold">{selectedSize.label}</span>
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
                    <span className="flex h-2 w-2 rounded-full bg-brand" />
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
                  href="/rfq"
                  className="w-full rounded-lg bg-navy py-3.5 px-6 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-navy-light transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  <span>Request Instant Escrow Quote</span>
                </Link>

                <a
                  href="http://foundrydrawings.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-lg bg-brand hover:bg-brand-hover py-3 px-6 text-center text-xs sm:text-sm font-extrabold text-white transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Upload Custom Drawing (foundrydrawings.com)</span>
                </a>
              </div>

              {/* Cart Feedback Toast */}
              {cartSuccess && (
                <div className="rounded-lg bg-blue-50 border border-blue-200 p-3 text-xs text-navy-900 flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="h-4 w-4 text-cobalt shrink-0" />
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
                <span className="inline-block rounded bg-brand text-white px-2 py-0.5 text-[10px] font-mono font-extrabold uppercase tracking-wider mb-2">
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
                          <td className="py-2 px-3 font-mono text-cobalt font-bold">{s.param4}</td>
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
                  <Link href="/rfq" className="text-brand font-semibold hover:underline">
                    Request Custom Machining Tolerance
                  </Link>
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
      {/* POINT 4 SECTION 1: METALLURGY & CHEMICAL/MECHANICAL MATRIX  */}
      {/* ============================================================ */}
      <section className="w-full pt-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="rounded bg-navy-950 text-white border border-navy-700 font-mono text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5">
                  EN 10204 Type 3.1 Traceability
                </span>
                <span className="text-xs font-semibold text-cobalt flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5" /> 100% Heat Verified
                </span>
              </div>
              <h3 className="font-heading text-lg sm:text-2xl font-bold uppercase text-slate-900 tracking-tight">
                Certified Chemical Metallurgy &amp; Mechanical Properties
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">
                Optical Emission Spectrometry (OES) melt analysis, calibrated tensile pull bars, and microscopic phase structure for <strong className="text-slate-900">{listing.title}</strong>.
              </p>
            </div>

            {/* Tab Selector */}
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 shrink-0 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setActiveMetaTab("chemical")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeMetaTab === "chemical"
                    ? "bg-white text-navy shadow-xs font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Microscope className="h-3.5 w-3.5 text-brand" />
                <span>Chemical Matrix</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMetaTab("mechanical")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeMetaTab === "mechanical"
                    ? "bg-white text-navy shadow-xs font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Scale className="h-3.5 w-3.5 text-brand" />
                <span>Mechanicals &amp; Impact</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMetaTab("microstructure")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeMetaTab === "microstructure"
                    ? "bg-white text-navy shadow-xs font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Layers className="h-3.5 w-3.5 text-brand" />
                <span>Microstructure</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Chemical Composition */}
          {activeMetaTab === "chemical" && (
            <div className="pt-6 animate-fadeIn">
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-navy-950 text-white font-mono text-[10px] uppercase tracking-wider">
                      <th className="py-3 px-4">Element Symbol</th>
                      <th className="py-3 px-4">Element Name</th>
                      <th className="py-3 px-4">Governing Standard Range</th>
                      <th className="py-3 px-4">Actual Certified Heat Value</th>
                      <th className="py-3 px-4 text-right">Ladle Heat Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-sans text-slate-700">
                    {detailData.chemicalComposition.map((el, eIdx) => (
                      <tr key={eIdx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2.5 px-4 font-mono font-bold text-navy">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded bg-slate-100 border border-slate-300 text-slate-900 text-xs">
                            {el.element}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 font-semibold text-slate-900">{el.name}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600">{el.standardRange}</td>
                        <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{el.actualValue}</td>
                        <td className="py-2.5 px-4 text-right">
                          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-navy-900 border border-blue-200 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase">
                            <CheckCircle className="h-3 w-3 text-cobalt" /> PASS
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono text-slate-500 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cobalt" />
                  <span>Spark Spectrometer: Thermo Fisher ARL 3460 (Argon Flush) • ASTM E415 Certified</span>
                </div>
                <div>Ladle Heat No: <strong className="text-navy">#FE-2026-HT8842-A</strong></div>
              </div>
            </div>
          )}

          {/* Tab 2: Mechanical Properties */}
          {activeMetaTab === "mechanical" && (
            <div className="pt-6 animate-fadeIn">
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-navy-950 text-white font-mono text-[10px] uppercase tracking-wider">
                      <th className="py-3 px-4">Mechanical Test Parameter</th>
                      <th className="py-3 px-4">Required Specification Standard</th>
                      <th className="py-3 px-4">Certified Heat Result</th>
                      <th className="py-3 px-4">Governing Test Method</th>
                      <th className="py-3 px-4 text-right">Acceptance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-sans text-slate-700">
                    {detailData.mechanicalProperties.map((mech, mIdx) => (
                      <tr key={mIdx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">{mech.property}</td>
                        <td className="py-3 px-4 font-mono text-slate-600">{mech.standardReq}</td>
                        <td className="py-3 px-4 font-mono font-bold text-brand">{mech.actualValue}</td>
                        <td className="py-3 px-4 font-mono text-slate-500 text-[11px]">{mech.testMethod}</td>
                        <td className="py-3 px-4 text-right">
                          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-navy-900 border border-blue-200 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase">
                            <CheckCircle className="h-3 w-3 text-cobalt" /> VERIFIED
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono text-slate-500 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <span>Tensile Testing: Schenck 1000 kN Universal Servo Frame with Class 0.5 Extensometer</span>
                </div>
                <div>Specimen Type: <strong className="text-navy">ASTM E8M Round Bar (d=12.5mm, L0=50mm)</strong></div>
              </div>
            </div>
          )}

          {/* Tab 3: Microstructure & Heat Treatment */}
          {activeMetaTab === "microstructure" && (
            <div className="pt-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand block mb-1">01 / Matrix Phase</span>
                  <div className="font-heading font-bold text-slate-900 text-sm mb-1.5">Constituent Phases</div>
                  <div className="text-xs text-slate-600 font-sans leading-relaxed">
                    {detailData.microstructure.matrix}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand block mb-1">02 / Morphology</span>
                  <div className="font-heading font-bold text-slate-900 text-sm mb-1.5">Nodularity / Grain</div>
                  <div className="text-xs text-slate-600 font-sans leading-relaxed">
                    {detailData.microstructure.nodularityOrGrain}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand block mb-1">03 / Cleanliness</span>
                  <div className="font-heading font-bold text-slate-900 text-sm mb-1.5">Inclusion Rating</div>
                  <div className="text-xs text-slate-600 font-sans leading-relaxed">
                    {detailData.microstructure.inclusionRating}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand block mb-1">04 / Condition</span>
                  <div className="font-heading font-bold text-slate-900 text-sm mb-1.5">Thermal Cycle</div>
                  <div className="text-xs text-slate-600 font-sans leading-relaxed">
                    {detailData.microstructure.heatTreatmentCondition}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <Sparkles className="h-3.5 w-3.5 text-brand" />
                <span>Optical metallography verified at 100x and 500x magnification after 2% Nital chemical etch per ASTM E3.</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* POINT 4 SECTION 2: TECHNICAL SPEC SHEET & CAD DOWNLOADS     */}
      {/* ============================================================ */}
      <section className="w-full pt-8 sm:pt-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="rounded bg-brand/10 text-brand font-mono text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 inline-block mb-1.5">
                Instant Engineering Portal
              </span>
              <h3 className="font-heading text-lg sm:text-2xl font-bold uppercase text-slate-900 tracking-tight">
                Technical Documentation &amp; 3D CAD Center
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Download certified quality test packages, First-Article inspection reports, and native 3D STEP models.
              </p>
            </div>
          </div>

          {/* Download Toast Notification */}
          {downloadToast && (
            <div className="mt-4 rounded-xl bg-navy-950 text-white p-3.5 px-4 text-xs font-mono flex items-center justify-between animate-fadeIn border border-navy-800 shadow-lg">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                <span>{downloadToast}</span>
              </div>
              <span className="text-white font-bold">100% Ready ✓</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {detailData.technicalDocs.map((doc) => (
              <div
                key={doc.id}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 flex flex-col justify-between hover:border-slate-400 hover:bg-white hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[10px] font-mono font-bold uppercase text-navy">
                      {doc.format} • {doc.size}
                    </span>
                    <span className="rounded bg-navy-950 text-white px-2 py-0.5 text-[10px] font-mono font-bold uppercase">
                      {doc.badge}
                    </span>
                  </div>

                  <h5 className="font-heading text-sm font-bold text-slate-900 group-hover:text-brand transition-colors line-clamp-2">
                    {doc.title}
                  </h5>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {doc.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleDownloadDoc(doc.title, doc.format)}
                  className="mt-4 w-full rounded-lg bg-white border border-slate-300 py-2.5 px-3 text-xs font-bold text-slate-800 hover:bg-navy hover:text-white hover:border-navy transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Download className="h-3.5 w-3.5 text-brand group-hover:text-white transition-colors" />
                  <span>Download {doc.format}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* POINT 4 SECTION 3: SUPPLIER & FACILITY AUDIT DOSSIER        */}
      {/* ============================================================ */}
      <section id="audit-dossier" className="w-full pt-8 sm:pt-10 scroll-mt-24">
        <div className="rounded-2xl border-2 border-navy-900 bg-navy-950 text-white p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded bg-brand text-white px-2.5 py-0.5 text-[10px] font-mono font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <ShieldCheck className="h-3.5 w-3.5" /> Pre-Audited &amp; Verified
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {detailData.supplierDossier.verifiedDate}
                </span>
              </div>
              <h3 className="font-heading text-xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
                {detailData.supplierDossier.foundryName}
              </h3>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1 text-slate-200">
                  <MapPin className="h-3.5 w-3.5 text-brand" />
                  <span>Plant HQ: <strong>{detailData.supplierDossier.headquarters}</strong></span>
                </span>
                <span>•</span>
                <span>Est. {detailData.supplierDossier.established}</span>
                <span>•</span>
                <span className="text-white font-semibold">{detailData.supplierDossier.meltCapacity}</span>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <Link
                href="/contact"
                className="rounded-lg bg-brand hover:bg-brand-dark text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <Building2 className="h-4 w-4" />
                <span>Request Plant Audit / Visit</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Left Column: Equipment & QA Capabilities */}
            <div className="lg:col-span-7 space-y-4">
              <h5 className="font-heading text-sm font-bold uppercase text-slate-200 tracking-wider">
                Melt Shop &amp; In-House Laboratory Capabilities
              </h5>
              <div className="space-y-3">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-[11px] font-mono text-blue-300 uppercase font-bold mb-1">Induction Melting Deck</div>
                  <div className="text-xs text-slate-200 font-sans leading-relaxed">
                    {detailData.supplierDossier.furnaces}
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-[11px] font-mono text-blue-300 uppercase font-bold mb-1">Metallurgical QA &amp; NDT Equipment</div>
                  <div className="text-xs text-slate-200 font-sans leading-relaxed">
                    {detailData.supplierDossier.testingLab}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Plant Certifications & Inspection Badges */}
            <div className="lg:col-span-5 space-y-4">
              <h5 className="font-heading text-sm font-bold uppercase text-slate-200 tracking-wider">
                Facility Accreditations &amp; TPI Partners
              </h5>
              <div className="grid grid-cols-2 gap-2">
                {detailData.supplierDossier.certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="rounded-lg bg-white/10 border border-white/10 p-2.5 text-[11px] font-semibold text-slate-200 flex items-center gap-2">
                    <Award className="h-3.5 w-3.5 text-brand shrink-0" />
                    <span className="truncate">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono uppercase text-slate-400 mb-2 font-bold">
                  Approved Third-Party Inspection (TPI) Agencies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {detailData.supplierDossier.inspectionAgencies.map((agency, aIdx) => (
                    <span key={aIdx} className="rounded-md bg-navy-800 border border-navy-700 px-2.5 py-1 text-[11px] font-bold text-slate-300">
                      {agency}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* POINT 4 SECTION 4: TECHNICAL & PROCUREMENT FAQS             */}
      {/* ============================================================ */}
      <section className="w-full pt-8 sm:pt-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="pb-6 border-b border-slate-200">
            <span className="rounded bg-slate-100 text-slate-700 font-mono text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 inline-block mb-1.5">
              Buyer Knowledge Base
            </span>
            <h3 className="font-heading text-lg sm:text-2xl font-bold uppercase text-slate-900 tracking-tight">
              Technical Procurement &amp; Engineering FAQs
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Everything you need to know regarding minimum orders, pattern tooling ownership, MTR heat certifications, and escrow terms.
            </p>
          </div>

          <div className="divide-y divide-slate-200 mt-2">
            {detailData.faqs.map((faq, fIdx) => (
              <div key={fIdx} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-brand transition-colors">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 group-hover:bg-slate-200 text-slate-700 transition-colors">
                    {openFaqIndex === fIdx ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {openFaqIndex === fIdx && (
                  <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-8 animate-fadeIn font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* POINT 4 SECTION 5: RELATED INDUSTRIAL LOTS & COMPANIONS      */}
      {/* ============================================================ */}
      <section className="w-full pt-8 sm:pt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="rounded bg-brand/10 text-brand font-mono text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 inline-block mb-1.5">
              Companion Components &amp; Tooling
            </span>
            <h3 className="font-heading text-lg sm:text-2xl font-bold uppercase text-slate-900 tracking-tight">
              Related Industrial Lots
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Engineered castings, forgings, and foundry equipment frequently procured alongside this lot.
            </p>
          </div>
          <Link
            href="/products"
            className="text-xs font-bold uppercase tracking-wider text-brand hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View All 24 Listings</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 min-[1660px]:grid-cols-8 gap-4 sm:gap-5">
          {relatedListings.map((rel) => (
            <div
              key={rel.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={rel.imageUrl}
                    alt={rel.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.srcset = "";
                      target.src = "/images/fallback-product.jpg";
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="rounded bg-navy-950/90 backdrop-blur-xs text-white px-2 py-0.5 text-[10px] font-mono font-bold uppercase">
                      {rel.category}
                    </span>
                    <span className="rounded bg-brand text-white px-2 py-0.5 text-[10px] font-mono font-bold uppercase">
                      {rel.status}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="text-[11px] font-mono text-slate-400 mb-1">{rel.id}</div>
                  <h5 className="font-heading text-sm font-bold uppercase text-slate-900 line-clamp-2 leading-snug">
                    {rel.title}
                  </h5>
                  <p className="mt-1 text-xs text-slate-500 font-mono truncate">
                    {rel.alloySpec}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs border-t border-slate-100 pt-3">
                    <div className="font-mono font-bold text-slate-900">{rel.priceEstimate}</div>
                    <div className="text-[11px] text-slate-500 truncate max-w-[120px]">{rel.location}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <Link
                  href={`/listings/${rel.id}`}
                  className="w-full rounded-lg bg-slate-100 hover:bg-navy hover:text-white text-slate-800 py-2 px-3 text-center text-xs font-bold uppercase tracking-wider transition-all block cursor-pointer"
                >
                  View Lot Specs →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* POINT 4 SECTION 6: EMBEDDED CUSTOM RFQ INQUIRY BOX         */}
      {/* ============================================================ */}
      <section className="w-full pt-8 sm:pt-10">
        <div className="rounded-2xl border border-slate-800 bg-navy-950 text-white p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="max-w-3xl">
            <span className="rounded bg-brand text-white px-2.5 py-0.5 text-[10px] font-mono font-extrabold uppercase tracking-wider inline-block mb-2">
              Custom Heat &amp; Tooling Engineering
            </span>
            <h3 className="font-heading text-xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
              Need Non-Standard Machining or Modified Metallurgy?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Send your 2D PDF drawing or 3D CAD (.STEP) model for direct factory evaluation. Our metallurgical engineering group will return a certified fixed-price quotation within 4 business hours.
            </p>
          </div>

          {rfqSubmitted ? (
            <div className="mt-6 rounded-xl bg-navy-900 border border-navy-700 p-4 text-slate-200 text-xs sm:text-sm flex items-center gap-3 animate-fadeIn">
              <CheckCircle className="h-5 w-5 text-brand shrink-0" />
              <span>
                Thank you! Your custom RFQ package for <strong>{listing.title}</strong> has been transmitted to {listing.vendorName}&apos;s Chief Metallurgist. An official quotation with MTR feasibility will be dispatched shortly.
              </span>
            </div>
          ) : (
            <form onSubmit={handleRfqSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1.5 font-bold">Target Quantity</label>
                <input
                  type="text"
                  value={rfqForm.targetQty}
                  onChange={(e) => setRfqForm({ ...rfqForm, targetQty: e.target.value })}
                  className="w-full rounded-lg border border-navy-700 bg-navy-900/90 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-brand focus:outline-hidden"
                  placeholder="e.g. 10 units / 5,000 kg"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1.5 font-bold">Delivery Port (Incoterm)</label>
                <input
                  type="text"
                  value={rfqForm.deliveryPort}
                  onChange={(e) => setRfqForm({ ...rfqForm, deliveryPort: e.target.value })}
                  className="w-full rounded-lg border border-navy-700 bg-navy-900/90 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-brand focus:outline-hidden"
                  placeholder="e.g. Houston / Rotterdam (CIF)"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1.5 font-bold">Corporate Work Email</label>
                <input
                  type="email"
                  required
                  value={rfqForm.contactEmail}
                  onChange={(e) => setRfqForm({ ...rfqForm, contactEmail: e.target.value })}
                  className="w-full rounded-lg border border-navy-700 bg-navy-900/90 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-brand focus:outline-hidden"
                  placeholder="engineer@company.com"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand hover:bg-brand-dark text-white py-2.5 px-5 text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer h-[38px]"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Submit Instant RFQ</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
      </div>

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
              <span className="text-white font-semibold hidden md:inline">Pre-audited Lot Certification ✓</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
