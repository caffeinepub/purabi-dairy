import { Button } from "@/components/ui/button";
import {
  Award,
  ChevronRight,
  Droplets,
  Facebook,
  Factory,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "News & Events", href: "#inauguration" },
  { label: "Farmers", href: "#farmers" },
  { label: "Contact", href: "#footer" },
];

const PRODUCTS = [
  {
    name: "Purabi Plus Milk",
    description:
      "Standardized fresh pouch milk with 4.5% fat and 8.5% SNF — available in 250ml and 500ml packs.",
    image: "/assets/generated/product-milk.dim_400x400.jpg",
  },
  {
    name: "Creamy Curd",
    description:
      "Thick, probiotic-rich sweet and plain curd made with our signature live cultures for a wholesome taste.",
    image:
      "/assets/uploads/img-20260329-wa0074-019d3a24-db71-76ec-b839-91bbec6e8f68-1.jpg",
  },
  {
    name: "Authentic Paneer",
    description:
      "Soft, fresh paneer made daily from full-cream milk — perfect for every Indian dish.",
    image: "/assets/generated/product-paneer.dim_400x400.jpg",
  },
  {
    name: "Premium Butter",
    description:
      "Churned from the finest cream, our butter brings a rich golden flavor to every bite.",
    image: "/assets/generated/product-butter.dim_400x400.jpg",
  },
  {
    name: "Pure Desi Ghee",
    description:
      "Traditionally clarified ghee with an irresistible aroma — the taste of authentic Assam.",
    image: "/assets/generated/product-ghee.dim_400x400.jpg",
  },
  {
    name: "Flavoured Milk",
    description:
      "Delicious flavoured milk in mango, chocolate, and strawberry — a favourite for all ages.",
    image: "/assets/generated/product-flavoured-milk.dim_400x400.jpg",
  },
  {
    name: "Sweet Lassi",
    description:
      "Refreshing traditional lassi blended with pure curd and a hint of cardamom sweetness.",
    image: "/assets/generated/product-lassi.dim_400x400.jpg",
  },
  {
    name: "Ice Cream",
    description:
      "Rich and creamy ice cream made from fresh Purabi milk — in classic and seasonal flavours.",
    image: "/assets/generated/product-icecream.dim_400x400.jpg",
  },
  {
    name: "Pure Honey",
    description:
      "Natural, unadulterated honey sourced from the pristine forests and farms of Assam.",
    image: "/assets/generated/product-honey.dim_400x400.jpg",
  },
];

const STATS = [
  { icon: Users, value: "52,000+", label: "Farmers" },
  { icon: MapPin, value: "25", label: "Districts" },
  { icon: Award, value: "1980s", label: "Established" },
  { icon: Factory, value: "1.5L Litres", label: "Per Day Capacity" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-xs">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 shrink-0"
          data-ocid="nav.link"
        >
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <Droplets className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-lg text-foreground tracking-tight">
            Purabi Dairy
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a href="#footer">
            <Button
              className="hidden sm:flex rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-5"
              data-ocid="nav.primary_button"
            >
              <MapPin className="w-4 h-4 mr-1.5" />
              Locate Us
            </Button>
          </a>
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-1.5"
              onClick={() => setMenuOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <Button
            className="rounded-full bg-primary text-white w-full mt-1 font-semibold"
            data-ocid="nav.primary_button"
            onClick={() => {
              setMenuOpen(false);
              window.location.hash = "footer";
            }}
          >
            <MapPin className="w-4 h-4 mr-1.5" /> Locate Us
          </Button>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="px-4 sm:px-6 py-8">
      <div
        className="max-w-[1200px] mx-auto relative rounded-2xl overflow-hidden"
        style={{ minHeight: 480 }}
      >
        <img
          src="/assets/generated/hero-banner.dim_1200x600.jpg"
          alt="Pure Goodness from Assam's Heart"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

        <div className="relative z-10 flex flex-col justify-center h-full px-8 sm:px-12 py-16 sm:py-20 max-w-2xl">
          <motion.p
            className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Assam's Most Trusted Dairy
          </motion.p>
          <motion.h1
            className="text-white font-extrabold text-4xl sm:text-5xl leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pure Goodness from Assam's Heart
          </motion.h1>
          <motion.p
            className="text-white/85 text-base sm:text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Delivering fresh, nutritious dairy products from over 52,000 farmers
            across Assam — every single day.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#products">
              <Button
                className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-7 py-2.5 h-auto"
                data-ocid="hero.primary_button"
              >
                Explore Products <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <a href="#about">
              <Button
                variant="outline"
                className="rounded-full border-white text-white bg-white/10 hover:bg-white/20 font-semibold text-sm px-7 py-2.5 h-auto"
                data-ocid="hero.secondary_button"
              >
                Our Story
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl leading-tight mb-5">
              About Purabi Dairy
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Purabi Dairy is Assam's first and largest cooperative dairy,
              established in the 1980s. With over four decades of service, it
              connects more than 52,000 farmers across 25 districts — ensuring
              fair prices, rural livelihoods, and consistently fresh dairy for
              Assam's families.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Under the APART project, the cooperative has expanded its daily
              processing capacity from 60,000 liters to 1.5 lakh liters per day.
              The new Silchar plant at Ghungoor brings this quality and
              freshness directly to the people of Barak Valley.
            </p>
            <div className="border-l-4 border-primary pl-5 py-1 mb-6">
              <p className="text-foreground font-semibold text-base italic leading-snug">
                "Celebrating our legacy of trust, quality, and heritage in every
                drop."
              </p>
            </div>
            {/* Milestone pills */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full">
                ✦ Est. 1980s — Assam's 1st Dairy
              </span>
              <span className="bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full">
                ✦ APART Project — Capacity ×2.5
              </span>
              <span className="bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full">
                ✦ Mar 2026 — Silchar Plant Launch
              </span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <img
              src="/assets/uploads/fb_img_1774791743303-019d3a04-ed07-77e2-a841-467f53d476be-1.jpg"
              alt="Purabi Dairy production facility — workers packing milk pouches"
              className="w-full h-[340px] sm:h-[420px] object-cover rounded-2xl shadow-card"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-xl px-5 py-3 shadow-card-hover">
              <p className="text-2xl font-extrabold leading-none">1980s</p>
              <p className="text-xs font-medium opacity-90 mt-0.5">
                Est. in Assam
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InaugurationSection() {
  return (
    <section
      id="inauguration"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-brand-blue-light"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            News & Events
          </p>
          <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl">
            Silchar Dairy Plant Inauguration
          </h2>
        </div>

        <motion.div
          className="bg-white rounded-2xl shadow-card overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2">
            <img
              src="/assets/uploads/fb_img_1774791711916-019d3a05-0825-7209-af04-d4ccb8bc351e-3.jpg"
              alt="Inauguration ceremony at Purabi Dairy Ghungoor, Silchar"
              className="w-full h-64 sm:h-80 lg:h-full object-cover"
            />
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-secondary px-3 py-1 rounded-full w-fit mb-5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Milestone Achievement
              </span>
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-1">
                2nd March 2026 · Purabi Dairy, Ghungoor, Silchar
              </p>
              <h3 className="text-foreground font-extrabold text-2xl sm:text-3xl leading-snug mb-3">
                A Landmark Step for Barak Valley
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                The Silchar dairy processing plant at Ghungoor was inaugurated
                on 2nd March 2026 — a landmark moment for Barak Valley. Under
                the APART project, capacity has grown from 60,000 liters to 1.5
                lakh liters (300 TLPD) per day, bringing standardized,
                hygienically packed fresh milk to consumers across the region
                for the first time.
              </p>
              {/* Capacity upgrade callout */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-secondary rounded-full px-4 py-2 text-sm font-semibold text-primary">
                  60,000 L/day{" "}
                  <span className="text-foreground font-bold">→</span> 1.5 Lakh
                  L/day
                </span>
                <span className="bg-secondary rounded-full px-4 py-2 text-sm font-semibold text-primary">
                  300 TLPD Capacity
                </span>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 py-1 mb-6 bg-secondary/60 rounded-r-lg">
                <p className="text-foreground text-sm italic leading-relaxed">
                  "The inauguration of the Silchar dairy processing plant is a
                  landmark step in fulfilling the long-standing demand for
                  quality fresh milk in Barak Valley — Purabi Dairy, 2nd March
                  2026."
                </p>
              </blockquote>
              <a href="#about">
                <Button
                  className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-7 w-fit"
                  data-ocid="inauguration.primary_button"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Facility tour photo */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-card"
            style={{ maxHeight: 400 }}
          >
            <img
              src="/assets/uploads/fb_img_1774791737995-019d3a24-fd8d-715d-ab3d-541b17e9de2e-3.jpg"
              alt="Officials inspecting the modern dairy processing line at the Ghungoor, Silchar plant"
              className="w-full object-cover"
              style={{ maxHeight: 400 }}
              loading="lazy"
            />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-3 italic">
            Officials inspecting the modern dairy processing line at the
            Ghungoor, Silchar plant — 2nd March 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PurabiPlusSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="rounded-2xl overflow-hidden shadow-card bg-brand-blue-light"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-white px-3 py-1 rounded-full w-fit mb-5 shadow-sm">
                ✦ Introducing
              </span>
              <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl leading-tight mb-3">
                Purabi Plus — <span className="text-primary">Fresh Milk,</span>{" "}
                Now in Barak Valley
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Purabi Plus is our standardized fresh milk brand — now available
                in 250ml and 500ml pouch packs. Containing 4.5% fat and 8.5%
                SNF, every pack guarantees superior nutritional value and
                consistent quality for your family.
              </p>

              {/* Quality details pill */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold rounded-full px-4 py-2 w-fit mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                4.5% Fat · 8.5% SNF · Hygienically Packed
              </div>

              {/* Product cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-white rounded-xl p-5 shadow-sm border border-border text-center"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  }}
                  transition={{ duration: 0.2 }}
                  data-ocid="purabi_plus.item.1"
                >
                  <div className="text-4xl mb-2">🥛</div>
                  <p className="font-extrabold text-foreground text-lg leading-none mb-1">
                    250ml
                  </p>
                  <p className="text-muted-foreground text-xs mb-3">
                    Pouch Pack
                  </p>
                  <p className="text-primary font-extrabold text-2xl">₹18</p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-xl p-5 shadow-sm border border-border text-center"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  }}
                  transition={{ duration: 0.2 }}
                  data-ocid="purabi_plus.item.2"
                >
                  <div className="text-4xl mb-2">🥛</div>
                  <p className="font-extrabold text-foreground text-lg leading-none mb-1">
                    500ml
                  </p>
                  <p className="text-muted-foreground text-xs mb-3">
                    Pouch Pack
                  </p>
                  <p className="text-primary font-extrabold text-2xl">₹35</p>
                </motion.div>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <img
                src="/assets/uploads/fb_img_1774791743303-019d3a05-0197-77ae-a9c3-5479d11a80fc-2.jpg"
                alt="Purabi Plus milk production facility"
                className="w-full h-64 sm:h-80 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-l" />
              <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                <p className="text-white font-bold text-sm text-center drop-shadow">
                  Purabi Plus — Made Fresh, Packed Right
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: { product: (typeof PRODUCTS)[0]; index: number }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      data-ocid={`products.item.${index + 1}`}
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-foreground font-bold text-base mb-1.5">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section
      id="products"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-brand-blue-light"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Our Portfolio
          </p>
          <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl mb-3">
            Our Range of Dairy Products
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            From fresh milk to artisan ghee — every Purabi product is a promise
            of purity from Assam's farms.
          </p>
        </div>

        {/* Products range banner */}
        <motion.div
          className="mb-10 relative rounded-2xl overflow-hidden shadow-card"
          style={{ maxHeight: 320 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/assets/uploads/img-20260329-wa0075-019d3a24-e8c0-7349-8bf1-3b79477a0c10-2.jpg"
            alt="Purabi Dairy product range — Smart milk pouch, Honey jar, Lassi cup, Dahi pouch"
            className="w-full object-cover"
            style={{ maxHeight: 320 }}
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
          <p className="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-sm sm:text-base drop-shadow-md">
            The full Purabi range — Smart Milk, Honey, Lassi, Dahi &amp; more
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FarmersSection() {
  return (
    <section id="farmers" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Our Backbone
          </p>
          <h2 className="text-foreground font-extrabold text-3xl sm:text-4xl">
            Supporting Our Dairy Farmers
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/assets/generated/farmers-support.dim_1100x500.jpg"
              alt="Purabi Dairy farmer support program"
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-5 left-0 right-0 text-center text-white font-semibold text-sm sm:text-base px-4">
              Empowering 52,000+ local farmers across 25 districts through fair
              trade and rural development.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-2xl shadow-card p-6 text-center flex flex-col items-center gap-3 border border-border"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`farmers.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-extrabold text-2xl leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="bg-brand-blue-dark text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight">
                Purabi Dairy
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Nourishing Assam with pure, fresh dairy goodness — Assam's first
              cooperative dairy since the 1980s.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href={`https://www.${label.toLowerCase()}.com`}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  data-ocid="footer.link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/65 hover:text-white text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white/90">
              Our Products
            </h4>
            <ul className="space-y-2">
              {PRODUCTS.map((p) => (
                <li key={p.name}>
                  <a
                    href="#products"
                    className="text-white/65 hover:text-white text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white/90">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-white/70 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white/50" />
                <span>Purabi Dairy, Ghungoor, Silchar, Cachar, Assam</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/70 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-white/50" />
                <a
                  href="tel:+916000000000"
                  className="hover:text-white transition-colors"
                >
                  +91 6000 000 000
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/70 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-white/50" />
                <a
                  href="mailto:info@purabidairy.com"
                  className="hover:text-white transition-colors"
                >
                  info@purabidairy.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/55 text-xs">
            © {year} Purabi Dairy. All rights reserved.
          </p>
          <p className="text-white/45 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white/70 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <InaugurationSection />
        <PurabiPlusSection />
        <ProductsSection />
        <FarmersSection />
      </main>
      <Footer />
    </div>
  );
}
