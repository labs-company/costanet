"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mt-5">
      <Button
        className="btnUs text-white border-none bg-letter hover:bg-white hover:text-letter hover:font-semibold"
        variant="text"
        onClick={handleClickOpen}
      >
        Ver más {">>"}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className=" bg-letter"
      >
        <DialogContent className="bg-letter text-white flex flex-col justify-center">
          <DialogTitle className="p-0">
            <b>Misión</b>
          </DialogTitle>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="text-white"
          >
            CostaNet es una empresa de telecomunicaciones que orientará sus
            actividades hacia la promoción y comercialización de internet por
            medio de la fibra óptica de última generación, enfocados en mantener
            a nuestros usuarios conectados al mundo digital donde se les conceda
            una adecuada trasmisión de datos a alta velocidad, brindando un
            servicio de calidad de la mano de una atención técnica oportuna que
            nos permita hacer clientes felices.
          </DialogContentText>
        </DialogContent>
        <DialogContent className="bg-letter text-white flex flex-col justify-center">
          <DialogTitle className="p-0">
            <b>Vision</b>
          </DialogTitle>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="text-white"
          >
            Para el año 2025 CostaNet será una empresa reconocida nacionalmente,
            con una extensa variedad de planes domiciliarios y empresariales
            disponibles para todo público gracias a la oportuna adecuación de
            nuestros paquetes de internet a la economía de cada sector,
            distribuyendo nuestros servicios en las grandes ciudades de
            Colombia, siendo una empresa solida financieramente y proporcionando
            empleo local en cada una de nuestras sedes.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="bg-letter">
          <Button onClick={handleClose} className="text-white hover:underline">
            Volver
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
