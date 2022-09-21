<template>
    <v-sheet>
        <v-expansion-panels>
            <v-expansion-panel style="background: #AF1F23 !important;">
                <v-expansion-panel-header>
                    <div>
                        <img src="@/assets/mld/mldspot-logo.svg" class="logo">
                    </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col cols="12" lg="12">
                            <v-card class="purple-card" style="margin-bottom: 10px;">
                                <v-card-title>The Problem</v-card-title>
                                
                                <v-card-text>
                                    MLDSPOT Loyalty merupakan website point reward dari pembelian rokok MLD. Website tersebut telah memiliki user yang lebih dari 5000. Dalam kasus ini, website tersebut mengalami load data yang banyak dikarnakan pengambilan data user beserta riwayat pointnya sehingga user membutuhkan waktu hingga kurang lebih 30 sampai dengan 60 detik untuk mengakses homepage dari MLDSpot loyalty.
                                </v-card-text>
                            </v-card>
                            <v-card v-for="(item, index) in mld" :key="index" class="purple-card" style="margin-bottom: 10px;">
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

            <v-expansion-panel>
                <v-expansion-panel-header>
                    <div>
                        <img src="/assets/inla/logo_inla.png" style="width : 100px">
                    </div>
                    <h2 style="color : #43ba42">
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
                            <v-card v-for="(item, index) in inla" :key="index" class="green-card" style="margin-bottom: 10px;">
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

            <v-expansion-panel>
                <v-expansion-panel-header>
                    Wifi Retinad
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
            </v-expansion-panel>
    </v-expansion-panels>
    </v-sheet>
</template>
<script>
    export default{
        data(){
            return{
                mld : [
                    {
                        title : '1. Optimize Load ( Homepage )', 
                        desc : 'Optimasi pada homepage, dilakukan dengan memecah beberapa struktur UI menjadi beberapa macam komponen pada Vue.js. Setiap komponen melakukan pemanggilan request untuk kebutuhan masing masing. Dalam hal ini, load data dilakukan didalam masing - masing komponen vue sehingga user dapat mengakses homepage terlebih dahulu dan DOM akan dirender ketika User telah memasuki Homepage.',
                        sub_desc : 'Design loading menggunakan design skeleton loading dan loading diaktifkan ketika komponen telah di Mount oleh DOM dan loading selesai ketika pemanggilan API dari microservie berhasil.',
                        photo_1 : '/assets/mld/MLD0.png',
                        photo_2 : '/assets/mld/MLD1.png'
                    },
                    {
                        title : '2. Optimize Load ( Leaderboard Bulanan )',
                        desc : 'Optimasi pada halaman leaderboard bulanan, dilakukan dengan menggantikan kodingan html biasa dengan menggunakan Vue.js untuk memanggil data Leaderboard bulanan dari API menggunakan axios. Data akan ditampilkan setelah pemanggilan API berhasil dan diawali dengan Loading untuk menghindari akses page yang lama dikarnakan banyaknya data yang di load.',
                        sub_desc : 'Design loading menggunakan design skeleton loading dan loading diaktifkan ketika komponen telah di Mount oleh DOM dan loading selesai ketika pemanggilan API dari microservie berhasil.',
                        photo_1 : '/assets/mld/MLD6.png',
                        photo_2 : '/assets/mld/MLD5.png'
                    },
                    {
                        title : '3. Optimize Load ( Reward Catalog )',
                        desc : 'Optimasi pada halaman Reward Catalog, dilakukan dengan untuk mengurangi load data catalog reward menggunakan Vue.js. DOM akan diupdate dengan data catalog setelah API berhasil dipanggil dengan menggunakan Axios. Loading ditampilkan saat komponen telah di Mount oleh DOM dan loading akan selesai setelah API berhasil dipanggil.',
                        sub_desc : 'Design loading menggunakan design skeleton loading dan loading diaktifkan ketika komponen telah di Mount oleh DOM dan loading selesai ketika pemanggilan API dari microservie berhasil.',
                        photo_1 : '/assets/mld/MLD7.png',
                        photo_2 : '/assets/mld/MLD8.png'
                    },
                    {
                        title : '4. Web Based Camera ( Shopping Code )',
                        desc : 'Optimasi pada halaman Shopping Code diperuntukan untuk mengaplikasikan web based kamera. Web Based kamera digunakan untuk menghindarkan upload file foto struk, dikarnakan banyak User yang melakukan edit foto struk untuk melakukan kecurangan klaim point pembelian rokok MLD.',
                        sub_desc : '',
                        photo_1 : '/assets/mld/MLD4.png',
                        photo_2 : ''
                    }
                ],

                inla : [
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

                ]
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
    }
</style>