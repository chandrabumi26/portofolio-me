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

                            <v-card class="purple-card" style="margin-bottom: 10px;">
                                <v-card-title>What i use</v-card-title>
                                    <v-row>
                                        <v-col cols="12" lg="4">
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> Vue.js</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> jQuery</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> Vanilla.js</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                        </v-col>
                                        <v-col cols="12" lg="4">
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> HTML</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> CSSS</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> SCSS/SASS</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                        </v-col>
                                        <v-col cols="12" lg="4">
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> Laravel</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> Laravel - Dusk</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> Webpack ( Compiler )</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                        </v-col>
                                    </v-row>
                                
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
                            <v-card class="green-card" style="margin-bottom: 10px;">
                                <v-card-title>What i use</v-card-title>
                                    <v-row>
                                        <v-col cols="12" lg="3">
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> Vue.js</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> jQuery</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> Vanilla.js</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                        </v-col>
                                        <v-col cols="12" lg="3">
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> HTML</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> CSSS</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> SCSS/SASS</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                        </v-col>
                                        <v-col cols="12" lg="3">
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> Laravel</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> Laravel - Dusk</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> Vite ( Compiler )</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                        </v-col>
                                        <v-col cols="12" lg="3">
                                            <v-list-item>
                                                <v-list-content>
                                                    <v-icon>mdi-circle-small</v-icon>
                                                    <v-text> Inertia</v-text>
                                                </v-list-content>
                                            </v-list-item>
                                        </v-col>
                                    </v-row>
                                
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

            <v-expansion-panel style="background-color : #e7128b">
                <v-expansion-panel-header>
                    <div>
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
                            <v-card v-for="(item, index) in retinad" :key="index" class="pink-card" style="margin-bottom: 10px;">
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

                ],
                retinad : [
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