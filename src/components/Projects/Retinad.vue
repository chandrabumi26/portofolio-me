<template>
    <v-expansion-panel style="background-color : #e7128b">
                <v-expansion-panel-header>
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="/assets/retinad/retinad-logo.svg" alt="" style="width:400px">
                    </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col cols="12" lg="12">
                            <v-card class="pink-card" style="margin-bottom: 10px;">
                                <v-card-title>The Problem</v-card-title>
                                
                                <v-card-text>
                                    Retinad merupakan platform wifi ads yang menyediakan iklan didalam login wifi. Retinad telah berdiri sejak 2018 dan mempunyai sistem web based untuk pengelolaannya.
                                    pada kasus ini dikarnakan sistem yang telah dibuat dikembangkan dengan menggunakan teknologi lama (Code Igniter) sehingga tidak efisien untuk dilakukan pengembangan lebih lanjut, salah satu contohnya : Pemakaian Microservice dan Test Driven Development pada sisi BE dan FE.
                                </v-card-text>
                            </v-card>
                            <v-card class="green-card" style="margin-bottom: 10px;">
                                <v-card-title>What i use</v-card-title>
                                    <v-row>
                                        <v-col cols="12" lg="4">
                                            <v-list-item v-for="(item, index) in retinad.skills.slice(0,3)" :key="index">
                                                <v-list-item-content>
                                                <v-flex>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    {{ item }}
                                                </v-flex>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-col>
                                        <v-col cols="12" lg="4">
                                            <v-list-item v-for="(item, index) in retinad.skills.slice(3,6)" :key="index">
                                                <v-list-item-content>
                                                <v-flex>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    {{ item }}
                                                </v-flex>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-col>
                                        <v-col cols="12" lg="4">
                                            <v-list-item v-for="(item, index) in retinad.skills.slice(6,8)" :key="index">
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
                            <v-card v-for="(item, index) in retinad.items" :key="index" class="pink-card" style="margin-bottom: 10px;">
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
            retinad : {
                    skills : [
                        'Vue.js',
                        'Nuxt.js',
                        'jQuery',
                        'Ajax',
                        'HTML',
                        'SCSS/SASS',
                        'Laravel',
                        'Laravel - Dusk'
                    ],
                    items : [
                                {
                                    title : '1. Dashboard',
                                    desc : 'Membuat tampilan Dashboard sehingga user dapat menjalankan fitur dashboard dan dapat melihat traffic dari login wifi pada venue dari user itu sendiri. Sehingga user dapat memantau perkembangan login dan jumlah iklan yang telah ditonton pada wifi ads user',
                                    sub_desc : 'User dan admin juga dapat melakukan export untuk kebutuhan laporan. Biasanya laporan dibutuhkan sebagai pemanjangan kontrak yang akan team retinad tawarkan ke user',
                                    photo_1 : '/assets/retinad/RETINAD0.png',
                                    photo_2 : ''
                                },
                                {
                                    title : '2. User Management',
                                    desc : 'Membuat tampilan User Management sehingga user dapat menjalankan fitur tersebut untuk membuat, melakukan edit, menghapus dan menentukan role dari user itu sendiri. Biasanya fitur ini dipakai untuk User membuat account kepada staffnya untuk mengelola venue dan themes yang ditentukan untuk tampilan ads pada wifi login.',
                                    sub_desc : '',
                                    photo_1 : '/assets/retinad/RETINAD1.png',
                                    photo_2 : '/assets/retinad/RETINAD2.png'
                                },
                                {
                                    title : '3. Venue Management',
                                    desc : 'Membuat tampilan Venue Management sehingga user dapat menjalankan fitur tersebut untuk mengelola venue yang perlu diaktifkan dan di nonaktifkan. hanya role user Admin yang dapat membuat venue untuk user',
                                    sub_desc : 'Biasanya fitur ini digunakan jika user telah melakukan subscription dan Admin akan membuat venue untuk tempat pemasangan wifi beserta iklannya',
                                    photo_1 : '/assets/retinad/RETINAD3.png',
                                    photo_2 : ''
                                },
                                {
                                    title : '4. Features Management',
                                    desc : 'Membuat tampilan Features untuk User dapat melakukan pengelolaan fitur yang ditawarkan oleh Retinad, Fitur tersebut digunakan sebagai variant login wifi. contohnya : Login Wifi dapat melakukan dengan menonton ads yang berupa video, gambar, quiz dsb.',
                                    sub_desc : 'Fitur ini dapat dikelola oleh semua role User untuk venue user masing - masing. sehingga masing - masing user mempunyai fiturnya sendiri',
                                    photo_1 : '/assets/retinad/RETINAD4.png',
                                    photo_2 : ''
                                },
                                {
                                    title : '5. Flow Management',
                                    desc : 'Membuat tampilan Flow management untuk User dapat menentukan flow login wifi. Tidak ada batasan dalam penambahan flow login wifi. Contoh : Setelah berhasil login wifi, terdapat halaman untuk menonton video ataupun gambar sesuai flow yang User pilih',
                                    sub_desc : 'User juga dapat memilih device router yang digunakan. device router yang ditentukan pada flow akan diaplikasikan terhadap venue untuk User',
                                    photo_1 : '/assets/retinad/RETINAD5.png',
                                    photo_2 : '/assets/retinad/RETINAD6.png'
                                },
                                {
                                    title : '6. Themes Builder',
                                    desc : 'Membuat tampilan untuk pengelolaan tema sebagai tampilan login wifi. Tampilan tersebut dimerge dengan hasil penentuan flow dan digunakan saat wifi berhasil login',
                                    sub_desc : 'User dapat mengelola masing - masing themes yang telah dibuat.',
                                    photo_1 : '/assets/retinad/RETINAD7.png',
                                    photo_2 : '/assets/retinad/RETINAD8.png'
                                },
                                {
                                    title : '7. Packages Management',
                                    desc : 'Membuat tampilan pengelolaan packages untuk Admin. Packages ini dipergunakan untuk menentukan bandwith upload maupun download pada router di venue User',
                                    sub_desc : 'Hanya user dengan role Admin yang dapat mengelola Packages dari masing - masing venue User',
                                    photo_1 : '/assets/retinad/RETINAD10.png',
                                    photo_2 : ''
                                },
                                {
                                    title : '8. Activity Management',
                                    desc : 'Membuat tempilan pengelolaan Activity untuk Admin. Activity dipergunakan untuk user Admin memantau aktifitas yang user - user lakukan. Biasanya activity ini dipergunakan untuk report bulanan pada team retinad sehingga team retinad dapat memantau behavior user.',
                                    sub_desc : '',
                                    photo_1 : '/assets/retinad/RETINAD11.png',
                                    photo_2 : ''
                                },
                                {
                                    title : '9. User Interface ( Login Wifi )',
                                    desc : 'Membuat tampilan login wifi yang telah ditentukan bedasarkan flow dan masing - masing venue. Tampilan login wifi juga bedasarkan tema yang telah dibuat oleh User.',
                                    sub_desc : '',
                                    photo_1 : '/assets/retinad/RETINAD9.png',
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