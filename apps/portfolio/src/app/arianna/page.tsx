"use client";
import Flipper from "@/components/ui/Flipper";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Card {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

const getImages = () => {
  const images = [];
  for (let i = 0; i < 18; i++) {
    images.push(`/arianna/${i}.jpeg`, `/arianna/${i}.jpeg`);
  }
  return images;
};

export default function Page() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [flippable, setFlippable] = useState(true);

  useEffect(() => {
    const images = shuffleArray(getImages());
    const initialCards = images.map((image, i) => ({
      id: i,
      image,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(initialCards);
  }, []);

  const handleFlip = (clickedCard: Card) => {
    if (flippedCards.length > 1 || clickedCard.isFlipped) return;

    const newCards = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );

    setCards(newCards);
    setFlippedCards((f) => [...f, clickedCard]);

    if (flippedCards.length === 1) {
      const [firstCard] = flippedCards;

      if (firstCard!.image === clickedCard.image) {
        setTimeout(() => {
          const matchedCards = newCards.map((c) =>
            c.image === clickedCard.image ? { ...c, isMatched: true } : c
          );
          setCards(matchedCards);
          setFlippedCards([]);
          setFlippable(true);
        }, 1000);
      } else {
        setTimeout(() => {
          const resetCards = newCards.map((card) =>
            card.isMatched ? card : { ...card, isFlipped: false }
          );
          setCards(resetCards);
          setFlippedCards([]);
          setFlippable(true);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="grid grid-cols-6 w-max border-2 border-none dark:border-primary h-max object-scale-down mx-auto max-h-full no-scrollbar relative">
        {/* <Image
          width={1024}
          height={1024}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          src="/arianna/background.png"
          alt="background"
        /> */}
        {cards.map((card) => (
          <Flipper
            key={card.id}
            frontContent={
              <div className=" rounded-md w-full h-full bg-primary border-2 border-primary-foreground"></div>
            }
            onFlip={() => handleFlip(card)}
            flipped={card.isFlipped}
            flippable={flippable && flippedCards.length < 2}
            hidden={card.isMatched}
            backContent={
              <Image
                alt={`Grid Square ${card.id}`}
                width={128}
                height={128}
                src={card.image}
                className={` rounded-md aspect-square object-cover`}
              />
            }
          />
        ))}
      </div>
    </div>
  );
}
