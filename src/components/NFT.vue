<template>
    <v-sheet>
        <v-card class="profile">
            <img src="/assets/hushlab-logo.jpg" height="auto">
            <v-card-title style="font-weight : bold">hUShlab</v-card-title>
            <v-card-subtitle class="mt-2">10,000 editions of The Mad Scientist Experimental Club from hUShlab, who eager to create a sequence of abnormalities as a New Norm. The Mad Scientist resides in a club on the Ethereum blockchain as a unique non-fungible token (NFT). You will become a part of the sly initiator & creator who always thrive-to-stretch the limit under the roof of hUShlab.</v-card-subtitle>
        </v-card>
        <v-card class="mt-5">
            <v-row>
                <v-col cols="12" lg="3" class="justify-content-center align-items-center d-flex flex-column">
                    <v-card-title>What's my Role ?</v-card-title>
                    <img src="@/assets/profile-picture.jpeg" class="profile-round">
                    <v-card-subtitle>Blockchain Developer</v-card-subtitle>
                </v-col>
                <v-col cols="12" lg="7">
                    <v-card-subtitle class="mt-15">
                        As a Blockchain Developer, i'm develop all of 10K Smart Contract with ERC721a (Azuki Based Smart Contract) on Ethereum Block to ensure all of my Holders will get optimized Gas Fee and safest Minting. I also made art generator engine with javascript language. All of metadata's has fulfilled ERC Smart Contract Standard.
                        I made myself as a Blockchain developer because i want to learn more about web3.0, since this project was created with my own big brother (Art Creative) there is no reason to not get my hand dirty. I didnt deploy all of these art to Opensea.io yet, because of NFT Bear Market, it's hard to make a community. 
                    </v-card-subtitle>

                    <v-card-subtitle>
                        I'm still learn more about Blockchain, Especially on Crypto block network. I spent every weekends to learn about this technology ether how it grow or it smacked. Blockchain are not my main focus on Developer fields, but i really love to learn about this like i love my hobby.
                    </v-card-subtitle>
                </v-col>
            </v-row>
        </v-card>
        <v-card class=" mt-5">
            <v-card-title>Mad Scientist Experimental Club Specific Editions ( 1 - 50 )</v-card-title>
            <v-card-subtitle>Mad Scientist Experimental Club. Cranky. Hatching and initiating stuff on web3.</v-card-subtitle>
            <div class="row justify-content-center align-items-center mt-2">
                <div v-for="(item, index) in art" :key="index" class="m-2">
                    <v-img
                        :src="item.src"
                        width="200px"
                    >
                    </v-img>
                    <v-card-subtitle>{{ item.name}}</v-card-subtitle>
                </div>
            </div>
            
        </v-card>
    </v-sheet>
</template>
<script>
export default {
    data(){
        return{
            art : [],
            page : 1,
            pageSize : 10,
            listCount : 0,
            historyList : []
        }
    },
    created(){
        for(let i = 1; i<=50; i++){
            this.art.push({
                name : 'Edition '+i,
                src : '/assets/NFT/'+i+'.png'
            })
        }
        
    },
}
</script>
<style scoped lang="scss">
    .v-sheet{
        background: transparent !important;
        padding: 50px;
    }

    img{

        &.profile-round{
            height: 200px;
            width: 200px;
            border-radius: 50% !important;
            border : 2px solid #4baf78;
        }
    }

    .v-card{
        border: 2px solid #4baf78 !important;
        background: white !important;
        
        &.profile{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #fafbcc !important;
            text-align: center;

            .v-card__title{
                font-size: 3rem;
            }
        }
    }
</style>
