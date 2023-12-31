import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function MatchesStartupView() {
  const theme = useTheme();

  // Hardcoded investors information
  const investorMatches = [
    {
      id: 1,
      logo: "https://serentcapital.com/wp-content/uploads/2022/05/Serent_logo_Flower-only-02-e1652288383675.png",
      name: "Serent Capital",
      tagline: "Your customers. Your values.",
      aboutUs:
        "Our mission is to deliver extraordinary returns by partnering with outstanding executive teams to grow exceptional businesses. Our success in this mission comes from our persistent adherence to our values.",
    },
    {
      id: 2,
      logo: "https://scontent.fftw1-1.fna.fbcdn.net/v/t39.30808-6/278663225_10159748977017403_7530975099053035145_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=IYXmt4hV1oQAX_rIOsY&_nc_oc=AQk0hDJtRivXWxa0ml9r2_pvXXVpfw2vdIzF0YQhxvaxiU-TuJ23vOfr6gWLPHoOeXQ&_nc_ht=scontent.fftw1-1.fna&oh=00_AfDFzV9fG9pkKRZMt8k_DoDUlkJf01qRi4IZgRG7HvdOlw&oe=65722C28",
      name: "Thinktiv",
      tagline: "We transform companies into the most valuable versions of themselves.",
      aboutUs:
        "Thinktiv is an integrated consulting firm with decades of commercial experience in software and technology. Thinktiv offers a product-centric operating playbook that leadership teams use to drive growth and enhance vaulation multiples.",
    },
    {
      id: 3,
      logo: "https://media.licdn.com/dms/image/C4D0BAQG1ylqL7Q4UVg/company-logo_200_200/0/1631333141189?e=2147483647&v=beta&t=DO03KYf1y9xb0MfnJaskIF3hGrE5glZSgad1o07KkSo",
      name: "True Wealth",
      tagline: "Investing in Gender Matters.",
      aboutUs:
        "We see value in the impact of women. True Wealth Ventures invests in smart female entrepreneurs, from consumer health innovators to sustainable product pioneers. Women-led companies have proven they deliver higher returns. It’s time to invest in new perspectives.",
    },
    {
      id: 4,
      logo: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/wib9mpwgfrswtiwgn5vd",
      name: "Trust Ventures",
      tagline: "Guiding startups through unventured territory.",
      aboutUs:
        "Technology exists today that can solve many of society’s greatest problems, but these technologies are often trapped in political stasis. The bigger the problem, the greater the value in solving it. Trust Ventures exists to find these solutions.",
    },
    {
      id: 5,
      logo: "https://mma.prnewswire.com/media/1816807/Elsewhere_Partners_Logo.jpg?p=facebook",
      name: "Elsewhere Partners",
      tagline: "Transitional capital. Transformational expertise. Success on your terms.",
      aboutUs:
        "We back early-stage scaleup software companies, providing a unique mix of thoughtful capital, subject matter expertise, and an incredible network of seasoned operators. Let’s take your business to the next level together.",
    },
  ];

  return (
    <Container
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: '100vh',
      }}
      >
        
      <Typography 
      style={{ 
        variant:"h2",
        component:"h1", 
        padding: theme.spacing(2),
        color: "#000000",
        fontFamily: "Libre Franklin-SemiBold, Helvetica",
        fontSize: "38px",
        fontWeight: 600,
        left: "0px",
        top: "30px",
        letterSpacing: 0,
        lineHeight: "normal",
        position: "relative",
    }}
    gutterBottom
    >
        Matches
      </Typography>

      <Grid container spacing={2}>
        {investorMatches.map((investor) => (
          <Grid item xs={12} key={investor.id}>
            <Paper elevation={3} 
            style={{ 
                padding: theme.spacing(2),
                color: "#ffffff",
                radius: "13.34px",
                shadow: "0px 3.56px 3.56px #00000040",
                height: "140px",
                top: "20px",
                position: "relative",
                width: "892px"
            }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography
                    style={{
                        color: "#d9d9d9",
                        radius: "100px",
                        height: "100px",
                        left: "50px",
                        position: "absolute",
                        top: "33px",
                        width: "100px"
                      }}
                    >
                        <Avatar style={{
                            height: '90px',
                            width: '90px',
                            
                        }} alt={investor.name} src={investor.logo} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography 
                  style={{
                    variant: "h6",
                    color: "#000000",
                    fontFamily: "Libre Franklin-SemiBold, Helvetica",
                    fontSize: "36px",
                    fontWeight: 600,
                    left: "180px",
                    top: "30px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute"
                  }}
                  >{investor.name}</Typography>
                  <Typography 
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "17.8px",
                    fontWeight: 400,
                    left: "180px",
                    top: "70px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "absolute",
                    width: "300px"
                  }}
                  >{investor.tagline}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                  style={{
                    color: "#000000",
                    fontFamily: "Libre Franklin-Regular, Helvetica",
                    fontSize: "17px",
                    fontWeight: 400,
                    left: "40px",
                    top: "10px",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    position: "relative",
                    width: "370px",
                  }}
                  >{investor.aboutUs}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}