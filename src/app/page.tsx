"use client";
import React, { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import { Transition } from "react-transition-group";
import Typography from "@mui/joy/Typography";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import kotak from "../../public/assets/kotak.png";
import bintang from "../../public/assets/bintang.png";
import segi from "../../public/assets/segi.png";
import ring from "../../public/assets/ring.png";
import worm from "../../public/assets/worms.png";
import Image from "next/image";
// import masak from "../../public/assets/masak.gif";
// import ketawa from "../../public/assets/kucing.gif";
// import perhatian from "../../public/assets/care.gif";
// import marah from "../../public/assets/marah.gif";
import "animate.css/animate.min.css";
import Confetti from "react-confetti";
import { Howl } from "howler";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [textLove, setTextLove] = useState("I Love You...");
  const [counter, setCounter] = useState(0);
  const words: string[] = [
    "I Love You So Much",
    "I Love You So Much Much",
    "I Love You So Much Much Much...",
  ];
  const width = 1450;
  const height = 1300;
  const [confetti, setConfetti] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTextLove(words[counter]);
      setCounter((prevState) => prevState + 1);
      if (counter > 2) {
        setTextLove("I Love You...");
        setCounter(0);
      }
    }, 2000);
  }, [textLove]);

  useEffect(() => {
    const sound = new Howl({
      src: [
        "/assets/jamrud-ultah.mp3",
        "/assets/bikin-romantis.mp3",
        "/assets/dari-planet-lain.mp3",
      ],
      autoplay: true,
      loop: false,
      volume: 0.5,
    });

    sound.play();

    setTimeout(() => {
      setConfetti(false);
    }, 20000);

    return () => {
      sound.unload();
    };
  }, []);
  return (
    <>
      <header className="px-[50px]">
        <div className="h-20 border-b border-solid border-gray-700 flex items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="ball-1 w-11 h-11 mr-3 rounded-full bg-[#1C1678] animate__animated animate__hinge animate__infinite animate-slow"></div>
            <div className="ball-2 w-11 h-11 mr-3 rounded-full bg-[#8576ff] animate__animated animate__bounce animate__infinite animate-slow"></div>
            <div className="ball-3 w-11 h-11 mr-3 rounded-full bg-[#7bc9ff] animate__animated animate__lightSpeedInRight animate__infinite animate-slow"></div>
          </div>
          <div>
            <Typography level="h2" className="text-white text-from">
              From: Someone
            </Typography>
          </div>
        </div>
      </header>
      <main>
        <Typography
          level="h1"
          className="hbd-text text-center text-white text-7xl mt-[170px] mb-7 relative z-10"
        >
          Happy Birthday!
        </Typography>
        <Typography
          level="h2"
          color="primary"
          className="love-text text-center text-4xl mb-14 relative z-10"
        >
          {textLove}
        </Typography>

        <div className="flex item-center justify-center">
          <Button
            className="z-10"
            variant="solid"
            color="danger"
            onClick={() => setOpen(true)}
          >
            Click this
          </Button>
        </div>

        <div>
          <Image className="frame-shape" src={kotak} alt="kotakimage" />
          <Image
            className="star-shape animate-pulse"
            src={bintang}
            alt="bintangimage"
          />
          <Image className="diamond-shape" src={segi} alt="bintangimage" />
          <Image
            className="ring-shape animate-pulse"
            src={ring}
            alt="bintangimage"
          />
          <Image
            className="worm-shape animate-pulse"
            src={worm}
            alt="bintangimage"
          />
        </div>
      </main>

      <Transition in={open} timeout={700}>
        {(state: string) => (
          <Modal
            keepMounted
            open={!["exited", "exiting"].includes(state)}
            onClose={() => setOpen(false)}
            slotProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: "none",
                  transition: `opacity 400ms, backdrop-filter 400ms`,
                  ...{
                    entering: { opacity: 1, backdropFilter: "blur(8px)" },
                    entered: { opacity: 1, backdropFilter: "blur(8px)" },
                  }[state],
                },
              },
            }}
            sx={{
              visibility: state === "exited" ? "hidden" : "visible",
            }}
          >
            <ModalDialog
              sx={{
                opacity: 0,
                transition: `opacity 300ms`,
                maxWidth: "70dvw",
                maxHeight: "80dvh",
                overflowY: "auto",
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}
            >
              <DialogTitle>Birthday Card</DialogTitle>
              <DialogContent className="modal-dialog-content scroll-smooth">
                <br />
                <Typography
                  className={`mb-4 ${
                    open ? "animate-bounce duration-300" : ""
                  }`}
                  color="success"
                  level="h2"
                >
                  Selamat Ulang Tahun...
                </Typography>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  vel nunc euismod, bibendum dolor nec, dignissim neque. Aliquam
                  laoreet nibh ac arcu dignissim pretium. Cras tempus est
                  dignissim erat mattis, non porta ipsum accumsan. Etiam
                  sollicitudin semper arcu non porttitor. Fusce urna lorem,
                  ornare convallis ante quis, mattis blandit tellus. Etiam
                  egestas, magna vitae egestas cursus, purus tortor tincidunt
                  ipsum, quis finibus erat ex at dolor. Nunc iaculis aliquam
                  dictum. Fusce eros sapien, eleifend ut purus quis, dapibus
                  dignissim purus. Pellentesque scelerisque tristique dolor at
                  ultrices. Donec et gravida purus. Proin aliquet dolor vel
                  ornare dignissim. Integer porttitor justo quis convallis
                  feugiat.
                </p>
                <p className="mb-2">
                  Vivamus mattis quam dictum sodales cursus. Sed convallis
                  ornare metus, vel aliquam augue volutpat quis. Ut vel lacus
                  tempus, dignissim ante sit amet, blandit libero. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Nunc et
                  posuere tortor, vitae viverra quam. Donec vulputate magna
                  arcu, in venenatis purus finibus et. Curabitur venenatis
                  vestibulum neque eget pretium. Nulla libero lectus, volutpat
                  ac libero at, efficitur volutpat eros. Nulla at velit et
                  lectus vehicula varius. Ut eros orci, congue et nisl cursus,
                  dapibus imperdiet ante. In quam nisl, iaculis et augue id,
                  malesuada volutpat sapien. Duis nunc risus, tempor eu
                  convallis non, cursus id nunc. Etiam tempus at arcu in ornare.
                  Ut a suscipit nulla. Ut sed ante vel urna efficitur semper
                  eget ac tortor.
                </p>
                <p className="mb-2">
                  Suspendisse massa mauris, molestie ut risus sed, vestibulum
                  facilisis eros. Nunc nec erat congue, luctus metus id,
                  malesuada arcu. Curabitur pulvinar maximus ullamcorper.
                  Pellentesque at maximus velit, quis sagittis turpis.
                  Pellentesque feugiat nibh non commodo aliquam. Integer a
                  ultrices eros, ut sodales sem. Vestibulum lacus velit,
                  lobortis a tristique quis, lobortis vitae nibh. Etiam volutpat
                  ligula mollis, tristique nibh nec, vestibulum purus. Sed
                  vulputate mollis metus in pretium. Nulla vehicula rutrum eros.
                  Ut a dapibus purus, ac accumsan odio. Morbi lacinia pulvinar
                  pharetra. Curabitur posuere interdum viverra. Phasellus
                  maximus nisi in velit venenatis, ut ultricies dolor
                  pellentesque.
                </p>
              </DialogContent>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
      <div className="overflow-hidden w-full h-full fixed top-0 left-0">
        <Confetti width={width} height={height} recycle={confetti} />
      </div>
    </>
  );
}
