import React from 'react'
import { Container, Grid, Box,Link} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import PaymentIcon from '@material-ui/icons/Payment';


const Footer = () => {
  return (
    <footer>
      <Box px={{xs : 3, sm : 10}}
      py={{xs : 5 , sm : 10}}
      bgcolor="text.primary"
      color="white"
      >
      <Container  maxWidth='lg' >
        <Grid container spacing={5}>
        <Grid item xs={16} sm={4}>
         <Box >About Us</Box>
         <Box>
                   <Link href="#" color='inherit'
                   >Who are we
                   </Link><br/>
                    <Link href="#" color='inherit'>
                      Careers
                      </Link><br/>
                    <Link href="#" color='inherit'>
                      Privacy and cookie policy
                      </Link><br/>
                    <Link href="#"color='inherit'>
                      Terms of use
                      </Link><br/>
                    <Link href="#" color='inherit'>
                      DarElBayShop Services
                      </Link><br/>
                   <Link href="#" color='inherit'>
                     DarElBayShop Logistics
                     </Link>
         </Box>
        </Grid>
          
        
        <Grid item xs={12} sm={4}>
         <Box >CUSTOMER SERVICE</Box>
         <Box>
                    <Link href="#" color='inherit'>
                      Support Center
                      </Link><br/>
                    <Link href="#" color='inherit'>
                      Buy on DarElBayShop
                      </Link><br/>
                    <Link href="#" color='inherit'>
                      Payment methods
                      </Link><br/>
                    <Link href="#" color='inherit'>
                      Shipping & Delivery
                      </Link><br/>
                    <Link href="#" color='inherit'>
                      Return policy
                      </Link><br/>
                    <Link href="#" color='inherit'>
                      Report a Product
                      </Link>
         </Box>
        </Grid>
           
        
        <Grid item xs={12} sm={4}>
         <Box >Contact Us</Box>
         <Box>
                    <Link href="#" color='inherit'>
                      Sousse
                      </Link> <br/>
                    <Link href="#" color='inherit'>
                      Monastir
                      </Link><br/>
                    <Link href="#" color='inherit'>
                      Mahdia
                      </Link><br/>
                    <Link href="#" color='inherit'>
                      Sfax
                      </Link>
         </Box>
        </Grid>
        
        
        <Grid item xs={12} sm={4}>
         <Box >FIND US ON</Box>
         <Box>
                    <Link href="#" color='inherit'>
                      <FacebookIcon />
                    Facebook
                    </Link><br/>
                    <Link href="#" color='inherit'>
                      <InstagramIcon />
                      Instagram
                      </Link><br/>
                    <Link href="#" color='inherit'>
                      <YouTubeIcon />
                      Youtube
                      </Link><br/>
                    <Link href="#" color='inherit'>
                      <TwitterIcon />
                      Twitter
                      </Link>
            
         </Box>
        </Grid> 
         <Grid item xs={12} sm={3}>
         <Box >MODES DE PAIEMENT</Box>
         <Box>
                    <Link href="#" color='inherit'>
                      <PaymentIcon />
                      Paiement à la livraison
                      </Link>
           
         </Box>
        </Grid>
        </Grid> 
      
      
        <Box textAlign="center" pt={{xs : 5, xm : 10}} pb={{xs : 5, xm : 0}}>
          DarElBayShop &reg; {new Date().getFullYear()}
        </Box>
      </Container>
      </Box>
    </footer>
  )
}

export default Footer
