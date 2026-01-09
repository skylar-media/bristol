import { EmblaCarouselType } from "embla-carousel";
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import Left from "../../svg/left";
import Right from "../../svg/right";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { color, ...restProps } = props;

  return (
    <button
      className={`embla__button embla__button--prev flex h-12 w-12 cursor-pointer items-center justify-center rounded-full p-2 hover:border focus:border md:h-15 md:w-15`}
      type="button"
      style={{
        borderColor: color,
      }}
      {...restProps}
    >
      <Left color={color} />
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { color, ...restProps } = props;

  return (
    <button
      className={`embla__button embla__button--next flex h-12 w-12 cursor-pointer items-center justify-center rounded-full p-2 hover:border focus:border md:h-15 md:w-15`}
      type="button"
      style={{
        borderColor: color,
      }}
      {...restProps}
    >
      <Right color={color} />
    </button>
  );
};
