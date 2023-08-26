import Image from "next/image";
import facebookIcon from "@/public/redes/facebook.png";
import instagramIcon from "@/public/redes/instagram.png";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function FooterPopup() {
  return (
    <>
      <div className="absolute bg-gray left-1/3 text-letter bottom-5">
        <ul>
          <li className="flex flex-col items-center gap-2 pt-4 pl-4">
            <Grid>
              <a
                href="https://www.facebook.com/costanetiptv.santaana"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={facebookIcon}
                  alt="Facebook de CostaNet"
                  className="w-auto h-8"
                />
              </a>
              <a
                href="https://www.facebook.com/costanetiptv.santaana"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={facebookIcon}
                  alt="Facebook de CostaNet"
                  className="w-auto h-8"
                />
              </a>
              <a
                href="https://www.facebook.com/costanetiptv.santaana"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={facebookIcon}
                  alt="Facebook de CostaNet"
                  className="w-auto h-8"
                />
              </a>
              <a
                href="https://www.facebook.com/costanetiptv.santaana"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={facebookIcon}
                  alt="Facebook de CostaNet"
                  className="w-auto h-8"
                />
              </a>
              <a
                href="https://www.instagram.com/costanetsantaana/"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram de CostaNet"
                  className="w-auto h-7 -mt-1"
                />
              </a>
            </Grid>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2">NUESTRAS REDES</h2>
        <ul>
          <li className="flex items-center gap-2 pt-4 pl-4">
            <a
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebookIcon}
                alt="Facebook de CostaNet"
                className="w-auto h-8"
              />
            </a>
            <a
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagramIcon}
                alt="Instagram de CostaNet"
                className="w-auto h-7 -mt-1"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
