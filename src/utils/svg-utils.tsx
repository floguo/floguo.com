export function groupSVGPathsByColor(svgString: string): string {
    const colorGroups: Record<string, string[]> = {};

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
    const paths = svgDoc.querySelectorAll('path');

    paths.forEach((path) => {
        const strokeColor = path.getAttribute('stroke');
        if (!strokeColor) return;

        if (!colorGroups[strokeColor]) {
            colorGroups[strokeColor] = [];
        }
        colorGroups[strokeColor].push(path.outerHTML);
    });

    let groupedSVG = '';
    for (const [color, paths] of Object.entries(colorGroups)) {
        const className = color.replace('#', '').toLowerCase();
        groupedSVG += `<g class="flower ${className}">\n${paths.join('\n')}\n</g>\n`;
    }

    return groupedSVG;
}