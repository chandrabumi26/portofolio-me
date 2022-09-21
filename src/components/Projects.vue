<template>
    <v-sheet>
        <v-expansion-panels>
            <Mld class="mb-4"></Mld>
            <Inla class="mb-4"></Inla>
            <Retinad class="mb-4"></Retinad>
            <KantinSehat class="mb-4"></KantinSehat>
    </v-expansion-panels>
    </v-sheet>
</template>
<script>
import Mld from './Projects/Mld.vue'
import Inla from './Projects/Inla.vue'
import Retinad from './Projects/Retinad.vue'
import KantinSehat from './Projects/Kantinsehat.vue'
export default{
    components : { Mld, Inla, Retinad, KantinSehat },
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