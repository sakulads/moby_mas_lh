import * as React from "react";
import { AppBar, Box, Button, Container, Grid, Hidden, Toolbar, Typography } from "@mui/material";
// import { makeStyles } from "tss-react/mui";
// import img from "next/img";
import Link from "next/link";

// const handleClick = () => {
//   // window.open("https://laserhouse.com.ua/");
//   location.href = "https://laserhouse.com.ua";
// };

export default function Home() {
  // const { classes } = useStyles();
  return (
    <>
      <Container
        sx={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column",
        }}
      >
        <Box>
          <img src={"/mob_maslogo.svg"} alt="logo" />
        </Box>

        <Typography
          sx={{
            padding: 0,
            margin: 0,
            textAlign: "center",
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          АКТУАЛЬНІ НОВИНИ, АКЦІЇ <br /> ТА ЗНИЖКИ
        </Typography>
        <Grid
          container
          sx={{
            display: "flex",
            padding: 1,
            mt: 1,
            alignItems: "center",
            background: "#FE2958",
            borderRadius: 35,
            maxWidth: 364,
            height: 64,
          }}
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
            }}
          >
            <img src={"/mob_mas/lh.svg"} alt="/lh" width={50} height={50} />
          </Grid>
          <Grid item xs={9} sx={{ margin: "0 auto" }}>
            <Box
              sx={{
                mr: 4,
                color: "#fff",
                fontSize: 22,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link
                // target={"self"}
                href={{ pathname: "https://laserhouse.com.ua" }}
                target="passHref"
              >
                Офіційний сайт
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            padding: 1,
            mt: 1,
            alignItems: "center",
            background: "#FE2958",
            borderRadius: 35,
            maxWidth: 364,
            height: 64,
          }}
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
            }}
          >
            <img src={"/mob_mas/instagram.svg"} alt="instagram" width={50} height={50} />
          </Grid>
          <Grid item xs={9} sx={{ margin: "0 auto" }}>
            <Box
              sx={{
                mr: 4,
                color: "#fff",
                fontSize: 22,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>
                <Link href="https://www.instagram.com/laserhousepoland/">Instagram Poland</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            padding: 1,
            mt: 1,
            background: "#FE2958",
            borderRadius: 35,
            maxWidth: 364,
            height: 64,
          }}
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
            }}
          >
            <img src={"/mob_mastelegram.svg"} alt="telegram" width={50} height={50} />
          </Grid>
          <Grid item xs={9} sx={{ margin: "0 auto" }}>
            <Box
              sx={{
                mr: 4,
                mt: 1,
                color: "#fff",
                fontSize: 22,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>
                <Link href="https://t.me/lazerhouse_ukraine">Telegram</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            display: "flex",
            padding: 1,
            mt: 1,
            background: "#FE2958",
            borderRadius: 35,
            maxWidth: 364,
            height: 64,
          }}
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
            }}
          >
            <img src={"/mob_mas/fb.svg"} alt="lh" width={50} height={50} />
          </Grid>
          <Grid item xs={9} sx={{ margin: "0 auto" }}>
            <Box
              sx={{
                mr: 4,
                mt: 1,
                color: "#fff",
                fontSize: 22,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>
                <Link href="https://www.facebook.com/lazerhouseukraine/">Facebook Ukraine</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            padding: 1,
            mt: 1,
            background: "#FE2958",
            borderRadius: 35,
            maxWidth: 364,
            height: 64,
          }}
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
            }}
          >
            <img src={"/mob_mas/fb.svg"} alt="lh" width={50} height={50} />
          </Grid>
          <Grid item xs={9} sx={{ margin: "0 auto" }}>
            <Box
              sx={{
                mr: 4,
                mt: 1,
                color: "#fff",
                fontSize: 22,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>
                <Link href="https://www.facebook.com/lazerhouse.poland">Facebook Poland</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            padding: "0 8px",
            textAlign: "center",
            mt: 1,
            background: "#FE2958",
            borderRadius: 35,
            maxWidth: 364,
            height: 64,
          }}
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
            }}
          >
            <img src={"/mob_maslogoItem.svg"} alt="logoItem" width={50} height={64} />
          </Grid>
          <Grid item xs={9} sx={{ display: "flex", alignItems: "center", margin: "0 auto" }}>
            <Box
              sx={{
                mr: 4,
                color: "#fff",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ lineHeight: 1.4 }}>
                <Link href="https://laserhousecosmetics.com.ua">
                  Інтернет-магазин <br /> КОСМЕТИКИ
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            padding: 1,
            mt: 1,
            background: "#FE2958",
            borderRadius: 35,
            maxWidth: 364,
            height: 64,
          }}
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
            }}
          >
            <img src={"/mob_mas/lh.svg"} alt="lh" width={50} height={50} />
            {/* <img src={"/mob_mas/mob_mas_copy/lh.svg"} alt="lh" width={50} height={50} /> */}
          </Grid>
          <Grid item xs={9} sx={{ margin: "0 auto" }}>
            <Box
              sx={{
                mr: 4,
                mt: 1,
                color: "#fff",
                fontSize: 22,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>
                <Link href="https://drive.google.com/drive/folders/1c4n8-WFjWdyx9glhYwFBAG3TFFdMc7V-">
                  Фото "До-Після"
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
