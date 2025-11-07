const baseTheme = {
  contentWidth: "728px",
  fontPrimary: '"Roboto", sans-serif',
  fontSecondary: '"Onest", sans-serif',
  fontSizeXxs: "10px",
  fontSizeXs: "12px",
  fontSizeSm: "14px",
  fontSizeMd: "16px",
  fontSizeLg: "20px",
  fontSizeXl: "24px",
  fontSizeXxl: "32px",
  basePadding: "15px",
  sizeMobile: "480px",
  sizeTablet: "768px",
  sizeLaptop: "1024px",
  mediaMobile: "@media (max-width: 480px)",
  mediaTablet: "@media (max-width: 768px)",
  mediaLaptop: "@media (max-width: 1024px)",
};

export const darkTheme = {
  ...baseTheme,
  background: "#0E0F1A",
  backgroundSecondary: "#1B1E2B",
  backgroundTertiary: "#052240",
  textPrimary: "#E4E6EB",
  textSecondary: "#9CA3AF",
  textTertiary: "#C3DAF1",
  textContrast: "#2fc7ed",
  primary: "#3B82F6",
  primaryHover: "#60A5FA",
  accent: "#FBBF24",
  border: "#272A36",
};

export const lightTheme = {
  ...baseTheme,
  background: "#F8FAFC",
  backgroundSecondary: "#FFFFFF",
  backgroundTertiary: "#E2E8F0",
  textPrimary: "#1E293B",
  textSecondary: "#64748B",
  textTertiary: "#475569",
  textContrast: "#2fc7ed",
  primary: "#2563EB",
  primaryHover: "#3B82F6",
  accent: "#CA8A04",
  border: "#E2E8F0",
};

export type ThemeType = typeof darkTheme & typeof lightTheme;
