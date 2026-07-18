import { createTheme } from "@mui/material";

// ─────────────────────────────────────────────────────────────────────────────
//  LUXURY SALON THEME — v3
//  Micro-interactions baked in globally. Use tokens for local overrides.
//
//  GRADIENT RULES (only 2 — never break these)
//  ① Dark    : linear-gradient(135deg, #0f172a, #1e293b, #7c3aed)
//               → Hero banner · Sidebar/Drawer · Footer ONLY
//  ② Accent  : linear-gradient(135deg, #667eea 0%, #764ba2 100%)
//               → CTA Buttons · Stat Cards · Section Titles ONLY
//
//  SOLID PALETTE
//  Cream Background  #FAF7F2   page canvas, light cards
//  Luxury Gold       #D4A574   icons, borders, stars, dividers
//  Dark Charcoal     #111827   primary text, headings
//  Soft Violet       #7c3aed   accent highlights, badges
//  Muted Gray        #374151   secondary text, table rows
//
//  MICRO-INTERACTION RULES
//  Cards    → translateY(-6px)  + shadow increase   (global via MuiCard)
//  Buttons  → scale(1.03)       + glow shadow       (global via MuiButton)
//  Inputs   → glow ring on focus                    (global via MuiTextField)
//  Sidebar  → item slide-right + gold border        (global via MuiListItemButton)
//  Local only: hero parallax, counter animations, staggered reveals
// ─────────────────────────────────────────────────────────────────────────────

export const tokens = {
  hero: {
    background:
      "linear-gradient(135deg,#0f172a 0%,#1e293b 55%,#7c3aed 100%)",
  },
  gradient: {
    dark: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #7c3aed 100%)",
    accent: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  color: {
    cream: "#FAF7F2",
    gold: "#D4A574",
    goldLight: "#F0DDBF",
    goldDark: "#A87842",
    charcoal: "#111827",
    charcoalMid: "#1e293b",
    violet: "#7c3aed",
    violetLight: "#ede9fe",
    violetSoft: "#667eea",
    gray: "#374151",
    grayLight: "#6B7280",
    grayMuted: "#9CA3AF",
    white: "#FFFFFF",
    divider: "#EDE8DF",
  },
  // Re-usable transition strings — import and use in sx={{}} locally
  transition: {
    smooth: "all 0.25s ease",
    medium: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",  // springy overshoot
    slow: "all 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  // Re-usable shadow presets
  shadow: {
    card: "0px 4px 20px rgba(124,58,237,0.07)",
    cardHover: "0px 20px 50px rgba(124,58,237,0.18)",
    button: "0px 8px 24px rgba(102,126,234,0.40)",
    buttonGold: "0px 8px 24px rgba(212,165,116,0.45)",
    gold: "0px 4px 16px rgba(212,165,116,0.30)",
    violet: "0px 8px 30px rgba(124,58,237,0.25)",
    dark: "0px 20px 60px rgba(15,23,42,0.40)",
  },
  glass: {
    light: {
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,0.3)",
    },

    dark: {
      background: "rgba(15,23,42,0.55)",
      backdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,0.08)",
    },
  },
  gradientText: {
    background:
      "linear-gradient(135deg,#667eea,#764ba2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  statCard: {
    background:
      "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
    color: "#fff",
    boxShadow:
      "0 15px 40px rgba(102,126,234,.35)",
  },
};

const luxuryTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      light: "#8b5cf6",
      main: "#7c3aed",
      dark: "#5b21b6",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#F0DDBF",
      main: "#D4A574",
      dark: "#A87842",
      contrastText: "#111827",
    },
    background: {
      default: "#FAF7F2",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#374151",
      disabled: "#9CA3AF",
    },
    success: { main: "#10b981", light: "#d1fae5", dark: "#065f46", contrastText: "#fff" },
    warning: { main: "#f59e0b", light: "#fef3c7", dark: "#b45309", contrastText: "#111827" },
    error: { main: "#ef4444", light: "#fee2e2", dark: "#b91c1c", contrastText: "#fff" },
    info: { main: "#667eea", light: "#e0e7ff", dark: "#4338ca", contrastText: "#fff" },
    divider: "#EDE8DF",
  },

  // ── Typography ─────────────────────────────────────────────────────────────
  typography: {
    fontFamily: "'Outfit', 'Inter', sans-serif",
    // fontFamily: "'Poppins', 'Inter', 'Segoe UI', sans-serif",
    h1: { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "3rem", letterSpacing: "-0.02em", color: "#111827" },
    h2: { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2.25rem", letterSpacing: "-0.015em", color: "#111827" },
    h3: { fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.75rem", color: "#111827" },
    h4: { fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.375rem", color: "#111827" },
    h5: { fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "1.125rem", color: "#111827" },
    h6: { fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#111827" },
    subtitle1: { fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "0.9375rem", color: "#374151" },
    subtitle2: { fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "0.875rem", color: "#374151" },
    body1: { fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.9375rem", lineHeight: 1.75, color: "#111827" },
    body2: { fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.875rem", lineHeight: 1.65, color: "#374151" },
    caption: { fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.75rem", letterSpacing: "0.04em", color: "#9CA3AF" },
    overline: { fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#D4A574" },
    button: { fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.03em", textTransform: "none" },
  },

  shape: { borderRadius: 18 },

  // Violet-tinted shadows
  shadows: [
    "none",
    "0px 1px 4px rgba(124,58,237,0.06)",
    "0px 2px 8px rgba(124,58,237,0.08)",
    "0px 4px 14px rgba(124,58,237,0.10)",
    "0px 6px 18px rgba(124,58,237,0.12)",
    "0px 8px 24px rgba(124,58,237,0.14)",
    "0px 10px 28px rgba(124,58,237,0.14)",
    "0px 12px 32px rgba(124,58,237,0.16)",
    "0px 14px 36px rgba(124,58,237,0.16)",
    "0px 16px 40px rgba(124,58,237,0.18)",
    "0px 18px 44px rgba(124,58,237,0.18)",
    "0px 20px 48px rgba(124,58,237,0.20)",
    "0px 22px 52px rgba(124,58,237,0.20)",
    "0px 24px 56px rgba(124,58,237,0.22)",
    "0px 26px 60px rgba(124,58,237,0.22)",
    "0px 28px 64px rgba(124,58,237,0.24)",
    "0px 30px 68px rgba(124,58,237,0.24)",
    "0px 32px 72px rgba(124,58,237,0.26)",
    "0px 34px 76px rgba(124,58,237,0.26)",
    "0px 36px 80px rgba(124,58,237,0.28)",
    "0px 38px 84px rgba(124,58,237,0.28)",
    "0px 40px 88px rgba(124,58,237,0.30)",
    "0px 42px 92px rgba(124,58,237,0.30)",
    "0px 44px 96px rgba(124,58,237,0.32)",
    "0px 46px 100px rgba(124,58,237,0.32)",
  ],

  // ── Component Overrides ────────────────────────────────────────────────────
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FCFBF8",
          scrollBehavior: "smooth",
        },

        "*::-webkit-scrollbar": {
          width: "8px",
        },

        "*::-webkit-scrollbar-track": {
          background: "#FAF7F2",
        },

        "*::-webkit-scrollbar-thumb": {
          background: "#D4A574",
          borderRadius: "20px",
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  BUTTON  — scale(1.03) + gradient glow on hover     ║
    // ╚══════════════════════════════════════════════════════╝
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          padding: "10px 28px",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "none",
          transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s ease, background 0.22s ease",
          willChange: "transform",
          "&:hover": {
            transform: "scale(1.03) translateY(-1px)",
            boxShadow: "0px 8px 24px rgba(102,126,234,0.40)",
          },
          "&:active": {
            transform: "scale(0.98)",
            boxShadow: "none",
          },
          // Ripple colour tweak
          "& .MuiTouchRipple-root .MuiTouchRipple-child": {
            backgroundColor: "rgba(255,255,255,0.30)",
          },
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#FFFFFF",
          "&:hover": {
            background: "linear-gradient(135deg, #7b8ff5 0%, #8a5ab8 100%)",
            boxShadow: "0px 8px 28px rgba(102,126,234,0.45)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #D4A574 0%, #A87842 100%)",
          color: "#111827",
          "&:hover": {
            background: "linear-gradient(135deg, #e0b98a 0%, #c09050 100%)",
            boxShadow: "0px 8px 28px rgba(212,165,116,0.45)",
          },
        },
        outlinedPrimary: {
          borderColor: "#7c3aed",
          borderWidth: "2px",
          color: "#7c3aed",
          "&:hover": {
            borderWidth: "2px",
            backgroundColor: "#ede9fe",
            boxShadow: "0px 4px 16px rgba(124,58,237,0.20)",
          },
        },
        sizeLarge: {
          padding: "13px 36px",
          fontSize: "1rem",
        },
        sizeSmall: {
          padding: "7px 18px",
          fontSize: "0.8rem",
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  CARD  — translateY(-6px) + shadow increase         ║
    // ╚══════════════════════════════════════════════════════╝
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "22px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #EDE8DF",
          boxShadow: "0 10px 30px rgba(17,24,39,.08)",
          transition: "transform 0.30s cubic-bezier(0.4,0,0.2,1), box-shadow 0.30s ease, border-color 0.30s ease",
          willChange: "transform",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 30px 60px rgba(17,24,39,.15)",
            borderColor: "rgba(124,58,237,0.20)",
          },
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  PAPER                                              ║
    // ╚══════════════════════════════════════════════════════╝
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          backgroundImage: "none",
          backgroundColor: "#FFFFFF",
        },
        elevation1: { boxShadow: "0px 4px 20px rgba(124,58,237,0.07)" },
        elevation2: { boxShadow: "0px 8px 30px rgba(124,58,237,0.10)" },
        elevation3: { boxShadow: "0px 12px 40px rgba(124,58,237,0.13)" },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  TEXT FIELD — glow ring on focus                    ║
    // ╚══════════════════════════════════════════════════════╝
    MuiTextField: {
      defaultProps: { variant: "outlined" },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            transition: "box-shadow 0.22s ease",
            "& fieldset": {
              borderColor: "#EDE8DF",
              borderWidth: "1.5px",
              transition: "border-color 0.22s ease",
            },
            "&:hover fieldset": {
              borderColor: "#D4A574",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#7c3aed",
              borderWidth: "2px",
            },
            "&.Mui-focused": {
              boxShadow: "0 0 0 4px rgba(124,58,237,0.10)",
            },
          },
          "& .MuiInputLabel-root": {
            transition: "color 0.22s ease",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#7c3aed",
          },
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  ICON BUTTON — scale on hover                       ║
    // ╚══════════════════════════════════════════════════════╝
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "transform 0.20s cubic-bezier(0.34,1.56,0.64,1), color 0.20s ease, background-color 0.20s ease",
          "&:hover": {
            transform: "scale(1.15)",
            backgroundColor: "rgba(124,58,237,0.08)",
          },
          "&:active": {
            transform: "scale(0.95)",
          },
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  APPBAR — solid white, crisp border                 ║
    // ╚══════════════════════════════════════════════════════╝
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#111827",
          backgroundImage: "none",
          boxShadow: "0px 1px 0px #EDE8DF, 0px 2px 12px rgba(17,24,39,0.05)",
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  DRAWER — dark gradient ✅                          ║
    // ╚══════════════════════════════════════════════════════╝
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #7c3aed 100%)",
          color: "#FAF7F2",
          borderRight: "none",
          boxShadow: "4px 0 40px rgba(15,23,42,0.40)",
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  SIDEBAR NAV — slide + gold border on active        ║
    // ╚══════════════════════════════════════════════════════╝
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          margin: "2px 10px",
          padding: "10px 14px",
          color: "rgba(250,247,242,0.70)",
          transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
          "& .MuiListItemText-primary": {
            transition: "transform 0.22s ease",
          },
          "&:hover": {
            background: "rgba(255,255,255,0.08)",
            color: "#FFFFFF",
            "& .MuiListItemText-primary": {
              transform: "translateX(4px)",
            },
            "& .MuiListItemIcon-root": {
              color: "#D4A574",
              transform: "scale(1.15)",
            },
          },
          "&.Mui-selected": {
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            color: "#FFFFFF",
            borderLeft: "3px solid #D4A574",
            "& .MuiListItemIcon-root": {
              color: "#D4A574",
            },
            "&:hover": {
              background: "rgba(255,255,255,0.16)",
            },
          },
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "rgba(250,247,242,0.55)",
          minWidth: "40px",
          transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), color 0.22s ease",
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: "0.9rem",
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  CHIP — subtle lift on hover                        ║
    // ╚══════════════════════════════════════════════════════╝
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          fontWeight: 600,
          fontSize: "0.78rem",
          transition: "transform 0.20s ease, box-shadow 0.20s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0px 4px 12px rgba(124,58,237,0.20)",
          },
          "&.MuiChip-colorPrimary": {
            backgroundColor: "#ede9fe",
            color: "#5b21b6",
          },
          "&.MuiChip-colorSecondary": {
            backgroundColor: "#F0DDBF",
            color: "#A87842",
          },
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  AVATAR — ring glow on hover                        ║
    // ╚══════════════════════════════════════════════════════╝
    MuiAvatar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#FFFFFF",
          fontWeight: 700,
          transition: "box-shadow 0.22s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1)",
          "&:hover": {
            transform: "scale(1.08)",
            boxShadow: "0 0 0 3px #FFFFFF, 0 0 0 5px #7c3aed",
          },
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  TABLE                                              ║
    // ╚══════════════════════════════════════════════════════╝
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            backgroundColor: "#F5F0FF",
            color: "#111827",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            borderBottom: "2px solid #EDE8DF",
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: "background-color 0.18s ease",
          "&:hover": {
            backgroundColor: "#F5F0FF !important",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #EDE8DF",
          fontSize: "0.9rem",
          padding: "14px 18px",
          color: "#374151",
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  TABS — animated indicator                          ║
    // ╚══════════════════════════════════════════════════════╝
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.9rem",
          color: "#374151",
          transition: "color 0.22s ease",
          "&.Mui-selected": {
            fontWeight: 700,
            color: "#7c3aed",
          },
          "&:hover": {
            color: "#7c3aed",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          height: "3px",
          borderRadius: "3px 3px 0 0",
          transition: "all 0.30s cubic-bezier(0.4,0,0.2,1)",
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  MISC                                               ║
    // ╚══════════════════════════════════════════════════════╝
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "28px",
          boxShadow: "0px 24px 64px rgba(15,23,42,0.22)",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: { borderRadius: "12px", fontWeight: 500, fontSize: "0.875rem" },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: { borderRadius: "12px" },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#111827",
          color: "#FAF7F2",
          fontSize: "0.78rem",
          borderRadius: "8px",
          padding: "7px 12px",
        },
        arrow: { color: "#111827" },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: 700,
          fontSize: "0.6875rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#FFFFFF",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "#EDE8DF" },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: { backgroundColor: "rgba(124,58,237,0.06)", borderRadius: "8px" },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          backgroundColor: "#ede9fe",
          height: "6px",
        },
        bar: {
          borderRadius: "50px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  CARD ACTION AREA — no grey flash on click          ║
    // ╚══════════════════════════════════════════════════════╝
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          "& .MuiCardActionArea-focusHighlight": {
            backgroundColor: "transparent",
          },
          "&:hover .MuiCardActionArea-focusHighlight": {
            opacity: 0,
          },
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  FAB — pop on hover                                 ║
    // ╚══════════════════════════════════════════════════════╝
    MuiFab: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#FFFFFF",
          boxShadow: "0px 8px 24px rgba(102,126,234,0.40)",
          transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s ease",
          "&:hover": {
            transform: "scale(1.10) translateY(-2px)",
            boxShadow: "0px 14px 32px rgba(102,126,234,0.50)",
          },
          "&:active": {
            transform: "scale(0.96)",
          },
        },
      },
    },

    // ╔══════════════════════════════════════════════════════╗
    // ║  SWITCH — accent colours                            ║
    // ╚══════════════════════════════════════════════════════╝
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          "&.Mui-checked": {
            color: "#7c3aed",
            "& + .MuiSwitch-track": {
              backgroundColor: "#7c3aed",
              opacity: 0.5,
            },
          },
        },
      },
    },
  },
});

export default luxuryTheme;
