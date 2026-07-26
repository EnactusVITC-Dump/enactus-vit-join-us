export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Departments", to: "/departments" },
  { label: "Timeline", to: "/timeline" },
  { label: "FAQs", to: "/faq" },
] as const;

export const contact = {
  email: "enactusvitc@gmail.com",
  phone: "+91 98765 43210",
  address: ["Vellore Institute of Technology", "Chennai, Tamil Nadu — 600127"],
};

export const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "YouTube", href: "https://youtube.com", icon: "Youtube" },
] as const;
