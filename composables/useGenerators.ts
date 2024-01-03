export const useGenerators = function () {
    const colorForNumber = (n: number) => {
        const hue = n * 137.508
        return `hsl(${hue},50%,75%)`
    }

    const imageUrlForN = (n: number) => {
        const w = n * 20
        const h = n * 18
        return `https://placehold.co/${w}x${h}`
    }

    return {
        colorForNumber,
        imageUrlForN
    }
}
