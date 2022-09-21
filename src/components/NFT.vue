<template>
    <v-sheet>
        <v-card class="profile">
            <img src="/assets/hushlab-logo.jpg" height="auto">
            <v-card-title>hUShlab</v-card-title>
            <v-card-subtitle class="mt-2">10,000 editions of The Mad Scientist Experimental Club from hUShlab, who eager to create a sequence of abnormalities as a New Norm. The Mad Scientist resides in a club on the Ethereum blockchain as a unique non-fungible token (NFT). You will become a part of the sly initiator & creator who always thrive-to-stretch the limit under the roof of hUShlab.</v-card-subtitle>
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
                name : 'Edition'+i,
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

    .v-card{
        background: white !important;
        img{
            &.nft{
                border: 2px solid #4baf78;
                width: 200px;
            }
        }
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
