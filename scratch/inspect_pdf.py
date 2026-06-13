import pypdf
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_dir = r"c:\Users\abdul\OneDrive\Masaüstü\kpss-cografya\ders-pdfleri"
path = os.path.join(pdf_dir, "TARİH NOT.pdf")
out_path = r"c:\Users\abdul\OneDrive\Masaüstü\kpss-cografya\scratch\tarih_not_extracted.txt"

reader = pypdf.PdfReader(path)
with open(out_path, "w", encoding="utf-8") as f:
    for i, page in enumerate(reader.pages):
        text = page.extract_text()
        if text:
            f.write(f"=== Page {i+1} ===\n")
            f.write(text)
            f.write("\n\n")

print(f"Extracted {len(reader.pages)} pages to {out_path}")
