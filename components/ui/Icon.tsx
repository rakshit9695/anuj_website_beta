import {
  ShieldCheck, Receipt, Percent, Globe2, ArrowLeftRight, TrendingUp,
  ScrollText, Handshake, LineChart, Rocket, Gem, Leaf, Scale, Target,
  BookOpenCheck, Building2, HeartHandshake, Network, Cpu, CreditCard, Pill,
  Stethoscope, Factory, Building, Landmark, Ship, TrafficCone, Zap,
  ShoppingBag, Plane, Antenna, Car, Package, GraduationCap, Clapperboard,
  Truck, Layers, MapPin, Globe, Lock, ArrowRight, ChevronRight, ChevronDown,
  Calculator, FileText, Files, BookOpen, CalendarDays, Link2, Bell, Search,
  Award,
  type LucideIcon,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  ShieldCheck, Receipt, Percent, Globe2, ArrowLeftRight, TrendingUp, ScrollText,
  Handshake, LineChart, Rocket, Gem, Leaf, Scale, Target, BookOpenCheck,
  Building2, HeartHandshake, Network, Cpu, CreditCard, Pill, Stethoscope,
  Factory, Building, Landmark, Ship, TrafficCone, Zap, ShoppingBag, Plane,
  Antenna, Car, Package, GraduationCap, Clapperboard, Truck, Layers, MapPin,
  Globe, Lock, ArrowRight, ChevronRight, ChevronDown, Calculator, FileText,
  Files, BookOpen, CalendarDays, Link2, Bell, Search, Award,
};

/** Render a Lucide icon by name; falls back to a neutral mark. */
export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = registry[name] ?? Layers;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}

/** Brass icon inside a navy-50 rounded tile — the emphasis treatment from 01. */
export function IconTile({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={
        "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-brass-600 " +
        (className ?? "")
      }
    >
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}
