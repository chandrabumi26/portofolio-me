<template>
    <v-expansion-panel>
                <v-expansion-panel-header>
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="/assets/inla/logo_inla.png" style="width : 100px">
                    </div>
                    <h2 style="color : #43ba42; font-weight : bold;">
                        INLA INDONESIA
                    </h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col cols="12" lg="12">
                            <v-card class="green-card" style="margin-bottom: 10px;">
                                <v-card-title>The Problem</v-card-title>
                                
                                <v-card-text>
                                    INLA Indonesia merupakan komunitas pencinta alam yang dimiliki oleh CEO Ajita Digital Agency ( Geri Fertino ) pada kasus ini, INLA ingin memperbarui tampilan website dari yang sebelumnya menggunakan wordpress
                                </v-card-text>
                            </v-card>
                            <v-card class="green-card" style="margin-bottom: 10px;">
                                <v-card-title>What i use</v-card-title>
                                    <v-row>
                                       <v-col cols="12" lg="4">
                                            <v-list-item v-for="(item, index) in inla.skills.slice(0,3)" :key="index">
                                                <v-list-item-content>
                                                <v-flex>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    {{ item }}
                                                </v-flex>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-col>
                                        <v-col cols="12" lg="4">
                                            <v-list-item v-for="(item, index) in inla.skills.slice(3,6)" :key="index">
                                                <v-list-item-content>
                                                <v-flex>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    {{ item }}
                                                </v-flex>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-col>
                                        <v-col cols="12" lg="4">
                                            <v-list-item v-for="(item, index) in inla.skills.slice(6,8)" :key="index">
                                                <v-list-item-content>
                                                <v-flex>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    {{ item }}
                                                </v-flex>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-col>
                                    </v-row>
                                
                            </v-card>
                            <v-card v-for="(item, index) in inla.items" :key="index" class="green-card" style="margin-bottom: 10px;">
                                <v-card-title>{{ item.title }}</v-card-title>
                                
                                <v-row>
                                    <v-col cols="12" lg="6">
                                        <img :src="item.photo_1" style="width: 100%;">
                                    </v-col>
                                    <v-col cols="12" lg="6">
                                        <v-card-text>
                                            {{ item.desc }}
                                        </v-card-text>
                                        <v-card-text v-if="item.sub_desc != ''">
                                            {{ item.sub_desc }}
                                        </v-card-text>
                                        <img v-if="item.photo_2 != ''" :src="item.photo_2" style="width: 100%;">
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
</template>
<script>
export default {
    data(){
        return{
            inla : {
                skills : [
                    'Vue.js',
                    'jQuery',
                    'Vanilla.js',
                    'HTML',
                    'SCSS/SASS',
                    'Laravel',
                    'Laravel - Dusk',
                    'Inertia.js'
                ],
                items : [
                            {
                                title : '1. Homepage Inla',
                                desc : 'Membuat tampilan hompage inla bedasarkan design UI/UX dengan menggunakan Vue.js dan pengambilan data melalui local repository laravel.',
                                sub_desc : 'Website pada tampilan homepage dirender dengan inertia untuk kebutuhan SEO. sehingga semua asset file javascript telah dikompile pada server',
                                photo_1 : '/assets/inla/INLA1.png',
                                photo_2 : '/assets/inla/INLA2.png'
                            },
                            {
                                title : '2. Galeri Inla',
                                desc : 'Membuat tampilan galeri inla bedasarkan UI/UX juga dengan menggunakan Vue.js dan pemanggilan data melalui local repository laravel',
                                sub_desc : 'Website pada tampilan galeri dirender dengan inertia untuk kebutuhan SEO. sehingga semua asset file javascript telah dikompile pada server',
                                photo_1 : '/assets/inla/INLA4.png',
                                photo_2 : '/assets/inla/INLA5.png'
                            },
                            {
                                title : '3. Profil Inla',
                                desc : 'Membuat tampilan profil inla bedasarkan UI/UX juga dengan menggunakan Vue.js dan pemanggilan data melalui local repository laravel',
                                sub_desc : 'Website pada tampilan profil dirender dengan inertia untuk kebutuhan SEO. sehingga semua asset file javascript telah dikompile pada server',
                                photo_1 : '/assets/inla/INLA6.png',
                                photo_2 : ''
                            }

                        ],
            },
        }
    }
}
</script>
<style scoped lang="scss">
    .v-sheet{
        background: transparent !important;
        padding: 50px;
    }

    .v-card{
        background : white !important;

        img{
            border : 2px solid navy;

            &.logo{
                width: 300px !important;
            }
        }
        &.purple-card{
            border: 2px solid purple !important;
        }

        &.green-card{
            border : 2px solid #43ba42 !important;
        }

        &.pink-card{
            border : 2px solid #5F6F94 !important;
        }
    }
</style>