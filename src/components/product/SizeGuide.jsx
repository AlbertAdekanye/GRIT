import { useEffect } from "react";
import { X } from "lucide-react";

const topMeasurements = [
  { size: "S", chest: "51", length: "69", sleeve: "21" },
  { size: "M", chest: "54", length: "72", sleeve: "22" },
  { size: "L", chest: "57", length: "75", sleeve: "23" },
  { size: "XL", chest: "61", length: "78", sleeve: "24" },
];

const bottomMeasurements = [
  { size: "S", waist: "76–81", length: "101", inseam: "74" },
  { size: "M", waist: "81–86", length: "103", inseam: "75" },
  { size: "L", waist: "86–91", length: "105", inseam: "76" },
  { size: "XL", waist: "91–97", length: "107", inseam: "77" },
];

const SizeGuide = ({ isOpen, onClose, category }) => {
  const isBottom = category === "Bottoms";

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end bg-black/65 sm:items-center sm:justify-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="size-guide-title"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] w-full overflow-y-auto bg-grit-cream p-6 text-grit-black sm:max-w-2xl sm:p-9"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-grit-red uppercase">
              Find your fit
            </p>

            <h2
              id="size-guide-title"
              className="mt-3 font-display text-6xl uppercase"
            >
              Size guide
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center border border-grit-black/20"
            aria-label="Close size guide"
          >
            <X size={22} />
          </button>
        </div>

        <p className="mt-6 text-sm leading-7 text-grit-earth">
          Measurements are shown in centimetres. These are temporary
          pre-production measurements and may be updated when the final GRIT
          garments are available.
        </p>

        <div className="mt-8 overflow-x-auto">
          {isBottom ? (
            <table className="w-full min-w-[500px] border-collapse text-left">
              <thead>
                <tr className="border-y border-grit-black">
                  <th className="px-3 py-4 text-xs uppercase">
                    Size
                  </th>
                  <th className="px-3 py-4 text-xs uppercase">
                    Waist
                  </th>
                  <th className="px-3 py-4 text-xs uppercase">
                    Length
                  </th>
                  <th className="px-3 py-4 text-xs uppercase">
                    Inseam
                  </th>
                </tr>
              </thead>

              <tbody>
                {bottomMeasurements.map((item) => (
                  <tr
                    key={item.size}
                    className="border-b border-grit-black/20"
                  >
                    <td className="px-3 py-4 font-bold">
                      {item.size}
                    </td>
                    <td className="px-3 py-4 text-sm">
                      {item.waist} cm
                    </td>
                    <td className="px-3 py-4 text-sm">
                      {item.length} cm
                    </td>
                    <td className="px-3 py-4 text-sm">
                      {item.inseam} cm
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full min-w-[500px] border-collapse text-left">
              <thead>
                <tr className="border-y border-grit-black">
                  <th className="px-3 py-4 text-xs uppercase">
                    Size
                  </th>
                  <th className="px-3 py-4 text-xs uppercase">
                    Chest width
                  </th>
                  <th className="px-3 py-4 text-xs uppercase">
                    Body length
                  </th>
                  <th className="px-3 py-4 text-xs uppercase">
                    Sleeve
                  </th>
                </tr>
              </thead>

              <tbody>
                {topMeasurements.map((item) => (
                  <tr
                    key={item.size}
                    className="border-b border-grit-black/20"
                  >
                    <td className="px-3 py-4 font-bold">
                      {item.size}
                    </td>
                    <td className="px-3 py-4 text-sm">
                      {item.chest} cm
                    </td>
                    <td className="px-3 py-4 text-sm">
                      {item.length} cm
                    </td>
                    <td className="px-3 py-4 text-sm">
                      {item.sleeve} cm
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="mt-8 bg-grit-stone/50 p-5">
          <h3 className="text-xs font-bold tracking-[0.15em] uppercase">
            How to measure
          </h3>

          <ul className="mt-4 space-y-3 text-xs leading-6 text-grit-earth">
            {isBottom ? (
              <>
                <li>
                  <strong>Waist:</strong> Measure around your natural waist.
                </li>
                <li>
                  <strong>Length:</strong> Measure from the waistband to the
                  bottom hem.
                </li>
                <li>
                  <strong>Inseam:</strong> Measure from the crotch seam to the
                  bottom hem.
                </li>
              </>
            ) : (
              <>
                <li>
                  <strong>Chest width:</strong> Measure across a flat garment
                  from armpit to armpit.
                </li>
                <li>
                  <strong>Body length:</strong> Measure from the highest
                  shoulder point to the bottom hem.
                </li>
                <li>
                  <strong>Sleeve:</strong> Measure from the shoulder seam to
                  the sleeve opening.
                </li>
              </>
            )}
          </ul>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-7 w-full bg-grit-black px-6 py-4 text-xs font-bold tracking-[0.18em] text-white uppercase transition-colors hover:bg-grit-red"
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default SizeGuide;