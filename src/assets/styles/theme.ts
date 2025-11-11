import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  typography: {
    fontFamily: "Vazirmatn, Arial, sans-serif",
  },

  palette: {
    mode: "light",
    primary: {
      main: "#3366FF", // رنگ دکمه Contact (آبی روشن)
      contrastText: "#000000", // متن مشکی روی دکمه
    },
    secondary: {
      main: "#476BB2", // رنگ دکمه Download Resume (سفید)
      contrastText: "#FFFFFF", // متن سفید روی دکمه
    },
    background: {
      default: "#F9FAFB", // پس‌زمینه کل کارت (خیلی روشن)
      paper: "#FFFFFF", // پس‌زمینه کارت اصلی
    },
    text: {
      primary: "#111827", // رنگ عنوان اصلی و متن‌ها
      secondary: "#6B7280", // رنگ توضیحات
    },
    action: {
      hover: "#caced3ff", // رنگ هاور روی دکمه سفید
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: "Vazirmatn, Arial, sans-serif",
  },

  palette: {
    mode: "dark",
    primary: {
      main: "#6699FF", // رنگ دکمه (آبی روشن‌تر برای حالت تاریک)
      contrastText: "#FFFFFF", // متن سفید روی دکمه تیره
    },
    secondary: {
      main: "#476BB2", // رنگ دکمه (تیره‌تر به جای سفید)
      contrastText: "#000000", // متن مشکی روی دکمه (برای کنتراست بهتر)
    },
    background: {
      default: "#0E0D12", // پس‌زمینه کل کارت (تیره خیلی زیاد)
      paper: "#1E1E26", // پس‌زمینه کارت اصلی (تیره ولی روشن‌تر از دِفالت)
    },
    text: {
      primary: "#F9FAFB", // رنگ عنوان اصلی و متن‌ها (سفید روشن)
      secondary: "#E0E0E0", // رنگ توضیحات (طوسی روشن)
    },
    action: {
      hover: "#374151",
    },
  },
});

export { lightTheme, darkTheme };
