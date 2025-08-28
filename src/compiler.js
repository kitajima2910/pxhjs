export function compilePXH(code) {
    return code
        .replace(/hàm\s+(\w+)\s*\[\]\s*\(/g, "function $1() {")
        .replace(
            /xuất hàm chính\s+(\w+)\s*\[\]\s*\(/g,
            "export default function $1() {"
        )
        .replace(/trả về\s*\(/g, "return (")
        .replace(/nút\s*\(\"([^\"]+)\"\)/g, "<button>$1</button>")
        .replace(/chữ to\s*\(\"([^\"]+)\"\)/g, "<h1>$1</h1>")
        .replace(/bao lại\s*\(/g, "<div>")
        .replace(/\)/g, "}");
}
