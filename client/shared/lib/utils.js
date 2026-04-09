
export function formatDate(date) {
    return new Date(date).toLocaleString("tr-TR", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }

  export function truncate(text, length = 100) {
    if (!text) return "";
    return text.length > length ? text.slice(0, length) + "..." : text;
  }

  export function capitalize(str = "") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }