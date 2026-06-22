import { useState } from "react";
import PageHeader from "../../../common/components/PageHeader";
import Card from "../../../common/components/Card";
import Button from "../../../common/components/Button";
import CopyButton from "../../passwordGenerator/components/CopyButton";

const ColorPalette = () => {
  const [colors, setColors] = useState([]);

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return { r, g, b };
  };

  const rgbToHex = (r, g, b) => {
    return (
      "#" +
      [r, g, b]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
    );
  };

  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h = 0,
      s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          break;
      }

      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const generatePalette = () => {
    const newColors = Array.from({ length: 5 }, () => {
      const rgb = generateRandomColor();
      const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

      return {
        rgb,
        hex,
        hsl,
      };
    });

    setColors(newColors);
  };

  const clearAll = () => setColors([]);

  return (
    <div className="space-y-5">
      <PageHeader
        title="Color Palette Generator"
        description="Generate random color palettes with HEX, RGB, HSL"
      />

      {/* ACTIONS */}
      <div className="flex gap-3">
        <Button onClick={generatePalette}>
          Generate Palette
        </Button>
        <Button variant="secondary" onClick={clearAll}>
          Clear
        </Button>
      </div>

      {/* PALETTE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {colors.map((color, idx) => (
          <Card key={idx} className="p-3 space-y-3">
            {/* COLOR BLOCK */}
            <div
              className="h-24 w-full rounded-md border border-zinc-700"
              style={{
                backgroundColor: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
              }}
            />

            {/* HEX */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-300">
                {color.hex}
              </span>
              <CopyButton text={color.hex} />
            </div>

            {/* RGB */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-300">
                rgb({color.rgb.r}, {color.rgb.g}, {color.rgb.b})
              </span>
              <CopyButton
                text={`rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`}
              />
            </div>

            {/* HSL */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-300">
                hsl({color.hsl.h}, {color.hsl.s}%, {color.hsl.l}%)
              </span>
              <CopyButton
                text={`hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;