import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StatsBar } from "./components/StatsBar";
import { CallCenterExplorer as AgentExplorer } from "./components/AgentExplorer";
import { CallCenterDetailModal as AgentDetailModal } from "./components/AgentDetailModal";
import { CallCenterCompareModal as AgentCompareModal } from "./components/AgentCompareModal";
import { RajasthanCities } from "./components/RajasthanCities";
import { JaipurRateChart } from "./components/JaipurRateChart";
import { LocalAreaCoverage } from "./components/LocalAreaCoverage";
import { JaipurGoogleMap } from "./components/JaipurGoogleMap";
import { AiConcierge } from "./components/AiConcierge";
import { CallCenterCapabilities } from "./components/CulturalExperiences";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { QuickKeywordsBar } from "./components/QuickKeywordsBar";
import { RfpModal } from "./components/RfpModal";
import { Footer } from "./components/Footer";
import { CallCenterFacility } from "./types";
import {
  CheckCircle2,
  SlidersHorizontal,
  Volume2,
  VolumeX,
  MessageCircle,
} from "lucide-react";
import {
  HERO_VIDEO_PATH,
  SITE_WHATSAPP_SECONDARY_RAW,
  SITE_WHATSAPP_SECONDARY_DISPLAY,
} from "./config/siteConfig";

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history)
      window.history.scrollRestoration = "manual";
    const resetToHomepageStart = () => {
      if (window.location.hash)
        window.history.replaceState(
          null,
          document.title,
          window.location.pathname + window.location.search,
        );
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    resetToHomepageStart();
    requestAnimationFrame(resetToHomepageStart);
    setTimeout(resetToHomepageStart, 50);
    return () => {
      if ("scrollRestoration" in window.history)
        window.history.scrollRestoration = "auto";
    };
  }, []);

  const [selectedFacilityForModal, setSelectedFacilityForModal] =
    useState<CallCenterFacility | null>(null);
  const [selectedFacilityForRfp, setSelectedFacilityForRfp] =
    useState<CallCenterFacility | null>(null);
  const [rfpModalOpen, setRfpModalOpen] = useState(false);
  const [compareList, setCompareList] = useState<CallCenterFacility[]>([]);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [wishlistIds, setWishlistIds] = useState<string[]>([
    "sitapura-mega-bpo",
  ]);
  const [searchFilter, setSearchFilter] = useState<{
    serviceType: string;
    seats: number;
    zone: string;
  } | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };
  const handleSearchFromHero = (filters: {
    serviceType: string;
    seats: number;
    zone: string;
  }) => {
    setSearchFilter(filters);
    document.getElementById("centers")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setSelectedFacilityForModal(null);
    setSelectedFacilityForRfp(null);
    setRfpModalOpen(false);
    setCompareModalOpen(false);
    if (sectionId === "hero") window.scrollTo({ top: 0, behavior: "smooth" });
    else
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
  };
  const handleToggleCompare = (facility: CallCenterFacility) => {
    setCompareList((prev) => {
      const exists = prev.some((v) => v.id === facility.id);
      if (exists) {
        showToast(`Removed ${facility.name} from comparison.`);
        return prev.filter((v) => v.id !== facility.id);
      }
      if (prev.length >= 3) {
        showToast("You can compare up to 3 hosts at a time.");
        return prev;
      }
      showToast(`Added ${facility.name} to side-by-side comparison.`);
      return [...prev, facility];
    });
  };
  const handleRemoveFromCompare = (facilityId: string) =>
    setCompareList((prev) => prev.filter((v) => v.id !== facilityId));
  const handleToggleWishlist = (facilityId: string) => {
    setWishlistIds((prev) =>
      prev.includes(facilityId)
        ? (showToast("Removed from saved hosts."),
          prev.filter((id) => id !== facilityId))
        : (showToast("Added to saved hosts."), [...prev, facilityId]),
    );
  };
  const handleOpenRfpForFacility = (facility: CallCenterFacility) => {
    setSelectedFacilityForRfp(facility);
    setRfpModalOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full max-w-[100vw] bg-slate-950 font-sans text-slate-100 selection:bg-pink-500 selection:text-slate-950 overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full max-w-[100vw] pointer-events-none z-0 overflow-hidden">
        <video
          key={HERO_VIDEO_PATH}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          webkit-playsinline="true"
          className="w-full h-full object-cover object-center opacity-95 filter brightness-[0.98] contrast-[1.05] transition-all duration-700"
        >
          <source src={HERO_VIDEO_PATH} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/15 to-slate-950/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1224_1px,transparent_1px),linear-gradient(to_bottom,#1f1224_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />
      </div>
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 rounded-full bg-slate-950/85 hover:bg-pink-600/90 backdrop-blur-md text-white border border-pink-500/40 transition-all shadow-2xl flex items-center justify-center text-xs font-bold group"
          title={isMuted ? "Unmute Background Video" : "Mute Background Video"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-pink-400 group-hover:text-white" />
          ) : (
            <Volume2 className="w-4 h-4 text-emerald-400 group-hover:text-white" />
          )}
        </button>
      </div>
      <div className="fixed bottom-4 right-4 z-40">
        <a
          href={`https://wa.me/${SITE_WHATSAPP_SECONDARY_RAW}?text=Hello!%20I%20want%20to%20connect%20with%20a%20local%20host.`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl flex items-center space-x-2 border border-emerald-400/40 transition-all hover:scale-105 active:scale-95"
          title="WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-current text-white animate-pulse" />
          <span className="hidden sm:inline">
            WhatsApp: {SITE_WHATSAPP_SECONDARY_DISPLAY}
          </span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 text-white font-bold px-4 py-3 rounded-2xl shadow-2xl flex items-center space-x-2 text-xs sm:text-sm border border-pink-400/30">
          <CheckCircle2 className="w-4 h-4 fill-current text-white" />
          <span>{toastMessage}</span>
        </div>
      )}
      <div className="relative z-10">
        <Navbar
          compareCount={compareList.length}
          wishlistCount={wishlistIds.length}
          onOpenCompare={() => setCompareModalOpen(true)}
          onOpenRfp={() => {
            setSelectedFacilityForRfp(null);
            setRfpModalOpen(true);
          }}
          onNavigateSection={handleNavigateSection}
          activeSection={activeSection}
        />
        <main>
          <Hero
            onSearch={handleSearchFromHero}
            onOpenRfp={() => {
              setSelectedFacilityForRfp(null);
              setRfpModalOpen(true);
            }}
            onOpenAi={() => handleNavigateSection("concierge")}
          />
          <StatsBar />
          <AgentExplorer
            onSelectVenue={(f) => setSelectedFacilityForModal(f)}
            onOpenRfpForVenue={handleOpenRfpForFacility}
            compareList={compareList}
            onToggleCompare={handleToggleCompare}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            externalFilter={searchFilter}
          />
          <JaipurRateChart />
          <RajasthanCities />
          <AiConcierge
            onOpenRfp={() => {
              setSelectedFacilityForRfp(null);
              setRfpModalOpen(true);
            }}
          />
          <CallCenterCapabilities
            onOpenRfp={() => {
              setSelectedFacilityForRfp(null);
              setRfpModalOpen(true);
            }}
          />
          <QuickKeywordsBar />
          <WhyChooseUs
            onOpenRfp={() => {
              setSelectedFacilityForRfp(null);
              setRfpModalOpen(true);
            }}
          />
          <LocalAreaCoverage />
          <JaipurGoogleMap />
        </main>
        {compareList.length > 0 && !compareModalOpen && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-slate-900/95 border border-pink-500/50 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl flex items-center space-x-4 text-xs">
            <div className="text-slate-200 flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4 text-pink-400" />
              <span>
                Comparing{" "}
                <strong className="text-pink-300 font-mono">
                  {compareList.length}
                </strong>{" "}
                Hosts
              </span>
            </div>
            <button
              onClick={() => setCompareModalOpen(true)}
              className="px-4 py-1.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-full text-xs shadow-md shadow-pink-500/20"
            >
              View Matrix
            </button>
          </div>
        )}
        {selectedFacilityForModal && (
          <AgentDetailModal
            facility={selectedFacilityForModal}
            onClose={() => setSelectedFacilityForModal(null)}
            onOpenRfp={(f) => {
              setSelectedFacilityForModal(null);
              handleOpenRfpForFacility(f);
            }}
          />
        )}
        {compareModalOpen && (
          <AgentCompareModal
            compareList={compareList}
            onClose={() => setCompareModalOpen(false)}
            onRemove={handleRemoveFromCompare}
            onClearAll={() => setCompareList([])}
            onOpenRfp={(f) => {
              setCompareModalOpen(false);
              handleOpenRfpForFacility(f);
            }}
          />
        )}
        {rfpModalOpen && (
          <RfpModal
            isOpen={rfpModalOpen}
            onClose={() => {
              setRfpModalOpen(false);
              setSelectedFacilityForRfp(null);
            }}
            selectedFacility={selectedFacilityForRfp}
            onSubmitSuccess={(refNum) =>
              showToast(`Host Request Received! Ref: ${refNum}`)
            }
          />
        )}
        <Footer
          onNavigateSection={handleNavigateSection}
          onOpenRfp={() => {
            setSelectedFacilityForRfp(null);
            setRfpModalOpen(true);
          }}
        />
      </div>
    </div>
  );
}
