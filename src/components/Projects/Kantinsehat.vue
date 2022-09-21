<template>
<v-expansion-panel style="background : #00A859">
    <v-expansion-panel-header>
        <div class="d-flex justify-content-center align-items-center">
            <img src="/assets/kantin-sehat/logo.png" style="width : 100px">
        </div>
        <h2 style="color : white; font-weight : bold">
            Kantin Sehat
        </h2>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
        <v-row>
            <v-col cols="12" lg="12">
                <v-card class="green-card" style="margin-bottom: 10px;">
                    <v-card-title>The Problem</v-card-title>
                    
                    <v-card-text>
                        MTSn 3 Jombang memerlukan aplikasi pemesanan makanan pada kantin sekolah mereka untuk mengantisipasi penumpukan siswa di kantin. antisipasi ini ditujukan untuk mengurangi penyebaran Covid 19. Sehingga siswa tidak perlu melakukan pembelian makanan di kantin, dan siswa dapat menerima makanan dengan cara delivery dari kantin dengan menggunakan pembayaran melalui kartu siswa yang ber QRCode.
                    </v-card-text>
                </v-card>
                <v-card class="green-card" style="margin-bottom: 10px;">
                    <v-card-title>What i use</v-card-title>
                        <v-row>
                            <v-col cols="12" lg="4">
                                <v-list-item v-for="(item, index) in kantin.skills.slice(0,3)" :key="index">
                                    <v-list-item-content>
                                    <v-flex>
                                        <v-icon>mdi-circle-small</v-icon>
                                        {{ item }}
                                    </v-flex>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                            <v-col cols="12" lg="4">
                                <v-list-item v-for="(item, index) in kantin.skills.slice(3,6)" :key="index">
                                    <v-list-item-content>
                                    <v-flex>
                                        <v-icon>mdi-circle-small</v-icon>
                                        {{ item }}
                                    </v-flex>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                            <v-col cols="12" lg="4">
                                <v-list-item v-for="(item, index) in kantin.skills.slice(6,8)" :key="index">
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
                <v-card v-for="(item, index) in kantin.items" :key="index" class="green-card" style="margin-bottom: 10px;">
                    <v-card-title>{{ item.title }}</v-card-title>
                    
                    <v-row>
                        <v-col cols="12" lg="4">
                            <img :src="item.photo_1" width="auto" height="400px">
                        </v-col>
                        <v-col cols="12" lg="8">
                            <v-card-text>
                                {{ item.desc }}
                            </v-card-text>
                            <v-card-text v-if="item.sub_desc != ''">
                                {{ item.sub_desc }}
                            </v-card-text>
                            <img v-if="item.photo_2 != ''" :src="item.photo_2" style="height : 400px">
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
            kantin : {
                skills : [
                    'Android Studio',
                    'Java - Android',
                    'XML - Android',
                    'PHP',
                    'SQLITE',
                    'phpMyAdmin'
                ],
                items : [
                    {
                        title : '1. Landing Page', 
                        desc : 'Membuat fitur Landing page pada aplikasi android Kantin Sehat, dan terdapat dua menu untuk pengecekan saldo. Pembuatan UI menggunakan bahasa XML pada android studio. dan proses pemrograman android menggunakan bahasa Java',
                        sub_desc : '',
                        photo_1 : '/assets/kantin-sehat/1.png',
                        photo_2 : ''
                    },
                    {
                        title : '2. Menu Page', 
                        desc : 'Membuat fitur menu untuk User dapat melakukan pemilihan makanan dan dimasukan ke keranjang, data keranjang disimpan dengan menggunakan SQLITE',
                        sub_desc : '',
                        photo_1 : '/assets/kantin-sehat/2.png',
                        photo_2 : '/assets/kantin-sehat/3.png'
                    },
                    {
                        title : '4. Order', 
                        desc : 'Membuat fitur menu untuk User dapat melakukan pengecekan kembali terhadap order yang telah dibuat oleh User. dan melakukan order makanan / minuman',
                        sub_desc : '',
                        photo_1 : '/assets/kantin-sehat/4.png',
                        photo_2 : '/assets/kantin-sehat/5.png'
                    },
                    {
                        title : '4. Cek Saldo', 
                        desc : 'Membuat fitur untuk User dapat melakukan pengecekan saldo melalui QRCode yang terdapat pada kartu sisa MTSn 3 Jombang',
                        sub_desc : '',
                        photo_1 : '/assets/kantin-sehat/6.png',
                        photo_2 : ''
                    },
                ]
            }
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

            &.logo{
                width: 300px !important;
            }
        }
        &.purple-card{
            border: 2px solid purple !important;
        }

        &.green-card{
            border : 2px solid #F7A76C !important;
        }

        &.pink-card{
            border : 2px solid #5F6F94 !important;
        }
    }
</style>