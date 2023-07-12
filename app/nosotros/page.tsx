import Image from "next/image";
import nosotros from '@/public/nosotros.png'
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";

export default function PageAbout() {
    return <Grid container spacing={2}>
        <Grid xs={6}>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Nosotros</h2>
        <Typography mt={2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae magnam quod autem, commodi, exercitationem voluptatem sapiente in, maxime aperiam itaque consequuntur dolorem minus ratione cum voluptate cumque aliquid perferendis nulla!</Typography>
        </Grid>
        <Grid xs={6}>
            <Image src={nosotros} alt="Quienes somos nosotros costanet"/>
        </Grid>
    </Grid> 
}