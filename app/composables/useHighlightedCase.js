export const useHighlightedCase = (options = {}) => {
  const caseInView = useState("highlighted-case", () => null);
  const caseElements = ref([]);

  let animationFrame;

  const updateCaseInView = () => {
    const viewportCenter = window.innerHeight / 2;
    let closestCase = null;
    let closestDistance = Infinity;

    for (const caseRef of caseElements.value) {
      const caseElement = caseRef.$el ?? caseRef;
      const { top, height } = caseElement.getBoundingClientRect();
      const distance = Math.abs(top + height / 2 - viewportCenter);

      if (distance < closestDistance) {
        closestCase = caseElement.id;
        closestDistance = distance;
      }
    }

    caseInView.value = closestCase;
  };

  const scheduleCaseInViewUpdate = () => {
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(updateCaseInView);
  };

  const selectCase = (caseId) => {
    caseInView.value = caseId;
    document.getElementById(caseId)?.scrollIntoView({ block: "center" });
  };

  if (options.track) {
    onMounted(() => {
      updateCaseInView();
      window.addEventListener("scroll", scheduleCaseInViewUpdate, {
        passive: true,
      });
      window.addEventListener("resize", scheduleCaseInViewUpdate);
    });

    onBeforeUnmount(() => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleCaseInViewUpdate);
      window.removeEventListener("resize", scheduleCaseInViewUpdate);
    });
  }

  return { caseInView, caseElements, selectCase };
};
