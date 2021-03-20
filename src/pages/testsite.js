import React from 'react'
import Layout from '../components/layout'

const TestSite = () => (
  <Layout>
        <html lang="en" dir="ltr"> 
                <head> 
                        <meta charset="utf-8"> 
                        <title>Changing Word Slider</title> 

                        <style></style>
                          .wordchanger:before{
                          content: 'content.';
                          animation-name: mywordchange;
                          animation-duration: 10s;
                          animation-iteration-count: infinite;
                          animation-timing-function: ease;
                          }

                          @keyframes mywordchange{
                          0%{content: 'CycleDistrict.';}
                          10%{content: 'fast.';}
                          20%{content: 'free.';}
                          30%{content: 'trashy.';}
                          40%{content: 'CycleDistrict.';}
                          100%{content: 'CycleDistrict.';}
                          }

                </head> 

                <body> 
                        <h1>ride</h1> 
                        <h1 class="wordchanger"></h1> 
                        <p><b>Motorcyclists</b>  
                        (EN: <sub>NOUN SINGULAR</sub> Motorcyclist, <sub>IPA</sub>: [ˈmoʊtɚˌsaɪ.klɪst]: A person willing to take a container of flammable liquid, place it on top of a hot moving engine and the put the whole lot between their legs.) 
                        </p> 
                </body> 
        </html>
  </Layout>

<!DOCTYPE html> 


)

export default TestSite
