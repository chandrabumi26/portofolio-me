<template lang="">
    <v-sheet>
        <v-row>
            <v-col cols="12" lg="7">
                <v-card class="left">
                    <img src="@/assets/profile-picture.jpeg" class="rounded">
                    <v-card-title>Dorojatun Chandrabumi</v-card-title>
                    <v-divider width="100"
                    ></v-divider>
                    <v-card-text><v-icon>mdi-briefcase</v-icon> Frontend Developer</v-card-text>
                    <v-card-text>
                        Hi!, as a newstarter Ubuntu user, i'm aiming to become advance on every Javascript extension / Framework. Confident using Vanilla.js , Vue.js, CSS/SCSS, jQuery, and very well known with native Java Android. i also love to work with GIT. Right now, i'm learning Blockchain Technology for my own NFT project.
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="5">
                <v-card class="right" style="height : 100% !important">
                    <v-card-title>About Me</v-card-title>
                    <v-list-item two-line>
                        <v-list-item-content>
                        <v-list-item-title><v-icon class="mr-3">mdi-baby-bottle-outline</v-icon> Born</v-list-item-title>
                        <v-list-item-subtitle style="margin-left : 40px">June, 2nd 1998</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item two-line>
                        <v-list-item-content>
                        <v-list-item-title><v-icon class="mr-3">mdi-map-marker-outline</v-icon> Where i live :</v-list-item-title>
                        <v-list-item-subtitle style="margin-left : 40px">Tangerang Selatan, Banten, Indonesia</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item two-line>
                        <v-list-item-content>
                        <v-list-item-title><v-icon class="mr-3">mdi-pinwheel-outline</v-icon> Hobbies</v-list-item-title>
                        <v-list-item-subtitle style="margin-left : 40px">Building Gunpla & Playing Piano</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item two-line>
                        <v-list-item-content>
                        <v-list-item-title><v-icon class="mr-3">mdi-email-outline</v-icon> Contact</v-list-item-title>
                        <v-list-item-subtitle style="margin-left : 40px">chandra.bumi@gmail.com</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item two-line>
                        <v-list-item-content>
                        <v-list-item-title><v-icon class="mr-3">mdi-school-outline</v-icon>Education</v-list-item-title>
                        <v-list-item-subtitle style="margin-left : 40px">Brawijaya University, Graduated class of 2021</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    
                </v-card>
            </v-col>
        </v-row>
    </v-sheet>
</template>
<script>
    export default{

    }
</script>
<style scoped lang="scss">
    .v-sheet{
        background: transparent !important;
        padding: 50px;
    }

    .v-card{
        height: auto !important;
        background: white !important;
        img{
            height: 200px;
            width: 200px;
            border-radius: 50% !important;
        }

        &.right{
            border : 2px solid #CA4E79;

            i{
                color : #CA4E79;
            }
        }

        &.left{
            border : 2px solid purple;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .v-card__text{
                text-align: center;
            }

            i{
                color: purple;
            }
        }
    }
</style>