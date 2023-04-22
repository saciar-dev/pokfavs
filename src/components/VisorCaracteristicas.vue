<script setup>

import { HelpRhombus, AutoFix, Compare, GoogleDownasaur, Snowflake, HeadCogOutline, 
    Grass, Fencing, CloudOutline, BottleTonicSkull, OctagonOutline, BugOutline, Ghost, Nut, 
    Fire, Water, LightningBolt, Pokeball} from 'mdue';

const props = defineProps(['peso', 'altura','tipos']);
</script>

<template>
    <table class="table table-striped ">
        <tbody>
            <tr>
                <td>
                    Weight
                </td>
                <td>
                    {{ peso / 10 }} Kgs.
                </td>
            </tr>
            <tr>
                <td>
                    Height
                </td>
                <td>
                    {{ altura/ 10 }} Mts.
                </td>
            </tr>
        </tbody>
    </table>
    <div v-for="tipo in tipos">
        <div v-if="tipo.type.name === 'normal'" class="type normal"> 
            <pokeball class="icon normal-icon"></pokeball>
            <span>Normal</span>            
        </div>
        <div v-if="tipo.type.name === 'fighting'" class="type fighting"> 
            <fencing class="icon fighting-icon"></fencing>
            <span>Fighting</span>            
        </div>
        <div v-if="tipo.type.name === 'flying'" class="type flying"> 
            <cloud-outline class="icon flying-icon"></cloud-outline>
            <span>Flying</span>            
        </div>
        <div v-if="tipo.type.name === 'ground'" class="type ground"> 
            <bottle-tonic-skull class="icon ground-icon"></bottle-tonic-skull>
            <span>Ground</span>  
        </div>
        <div v-if="tipo.type.name === 'poison'" class="type poison"> 
            <bottle-tonic-skull class="icon poison-icon"></bottle-tonic-skull>
            <span>Poison</span>            
        </div>
        <div v-if="tipo.type.name === 'grass'" class="type grass"> 
            <grass class="icon grass-icon"></grass>
            <span>Grass</span>            
        </div>
        <div v-if="tipo.type.name === 'rock'" class="type rock"> 
            <octagon-outline class="icon rock-icon"></octagon-outline>
            <span>Rock</span>            
        </div>
        <div v-if="tipo.type.name === 'bug'" class="type bug"> 
            <bug-outline class="icon bug-icon"></bug-outline>
            <span>Bug</span>            
        </div>
        <div v-if="tipo.type.name === 'ghost'" class="type ghost"> 
            <ghost class="icon ghost-icon"></ghost>
            <span>Ghost</span>            
        </div>
        <div v-if="tipo.type.name === 'steel'" class="type steel"> 
            <nut class="icon steel-icon"></nut>
            <span>Steel</span>            
        </div>
        <div v-if="tipo.type.name === 'fire'" class="type fire"> 
            <fire class="icon fire-icon"></fire>
            <span>Fire</span>            
        </div>
        <div v-if="tipo.type.name === 'water'" class="type water"> 
            <water class="icon water-icon"></water>
            <span>Water</span>            
        </div>        
        <div v-if="tipo.type.name === 'electric'" class="type electric"> 
            <lightning-bolt class="icon electric-icon"></lightning-bolt>
            <span>Electric</span>            
        </div>
        <div v-if="tipo.type.name === 'psychic'" class="type psychic"> 
            <head-cog-outline class="icon psychic-icon"></head-cog-outline>
            <span>Psychic</span>            
        </div>
        <div v-if="tipo.type.name === 'ice'" class="type ice"> 
            <snowflake class="icon ice-icon"></snowflake>
            <span>Ice</span>            
        </div>
        <div v-if="tipo.type.name === 'dragon'" class="type dragon"> 
            <google-downasaur class="icon dragon-icon"></google-downasaur>
            <span>Dragon</span>            
        </div>
        <div v-if="tipo.type.name === 'dark'" class="type dark"> 
            <compare class="icon dark-icon"></compare>
            <span>Dark</span>            
        </div>        
        <div v-if="tipo.type.name === 'fairy'" class="type fairy"> 
            <auto-fix class="icon fairy-icon"></auto-fix>
            <span>Fairy</span>            
        </div>
        
        <div v-if="tipo.type.name === 'unk'" class="type unk"> 
            <help-rhombus class="icon unk-icon"></help-rhombus>
            <span>Unknown</span>            
        </div>
        <div v-if="tipo.type.name === 'shadow'" class="type shadow"> 
            <pokeball class="icon shadow-icon"></pokeball>
            <span>Shadow</span>            
        </div>

    </div>
</template>

<style >
    :root {
    --negro: #000000ff;
    --text-dark: #1c1c1f;
    --text-light: #F2F2F2;

    --normal: rgb(114, 114, 114);
    --fighting: rgb(221, 43, 16);    
    --flying: rgb(179, 244, 255);
    --poison: rgb(62, 38, 148);
    --water: rgb(51, 146, 255);
    --grass: #00cc7eff;
    --fire: rgb(233, 155, 12);
    --electric: rgb(255, 251, 0);
    --ground: rgb(68, 53, 6);
    --rock: rgb(148, 148, 148);
    --bug: rgb(4, 131, 0);
    --steel: rgb(132, 167, 180);
    --psychic: rgb(245, 79, 209);
    --ice: rgb(59, 248, 255);
    --dragon: rgb(255, 215, 103);
    --dark: #1c1c1f;
    --fairy: rgb(13, 5, 88);
    --unk: #000000;
    --shadow: rgb(63, 58, 52);
    }

    .type{
        font-size: 1rem;
        border-radius: 1rem;
        margin-bottom: 0.4rem;
    }

    .icon{
        font-size: 2rem;
        padding-right: 5px;
    }

    .normal{
        background-color: var(--normal);
        color: var(--text-light);        
    }
    .normal .normal-icon{
        color: var(--text-light);
    }
    .fighting{
        background-color: var(--fighting);
        color: var(--text-light);
    }
    .fighting .fighting-icon{
        color: var(--text-light);
    }
    .flying{
        background-color: var(--flying);
        color: var(--text-dark);
    }
    .flying .flying-icon{
        color: var(--text-dark);
    }
    .poison{
        background-color: var(--poison);
        color: var(--text-light);        
    }
    .poison .poison-icon{
        color: var(--text-light);
    }
    .grass{
        background-color: var(--grass);
        color: var(--text-light);        
    }
    .grass .grass-icon{
        color: var(--text-light);
    }
    .ground{
        background-color: var(--ground);
        color: var(--text-light);        
    }
    .ground .ground-icon{
        color: var(--text-light);
    }
    .rock{
        background-color: var(--rock);
        color: var(--text-dark);        
    }
    .rock .rock-icon{
        color: var(--text-dark);
    }
    .bug{
        background-color: var(--bug);
        color: var(--text-light);        
    }
    .bug .bug-icon{
        color: var(--text-light);
    }
    .ghost{
        background-color: var(--ghost);
        color: var(--text-dark);        
    }
    .ghost .ghost-icon{
        color: var(--text-dark);
    }
    .steel{
        background-color: var(--steel);
        color: var(--text-dark);        
    }
    .steel .steel-icon{
        color: var(--text-dark);
    }
    .fire{
        background-color: var(--fire);
        color: var(--text-dark);        
    }
    .fire .fire-icon{
        color: var(--text-dark);
    }
    .water{
        background-color: var(--water);
        color: var(--text-light);        
    }
    .water .water-icon{
        color: var(--text-light);
    }
    .electric{
        background-color: var(--electric);
        color: var(--text-dark);        
    }
    .electric .electric-icon{
        color: var(--text-dark);
    }
    .psychic{
        background-color: var(--psychic);
        color: var(--text-dark);        
    }
    .psychic .psychic-icon{
        color: var(--text-dark);
    }
    .ice{
        background-color: var(--ice);
        color: var(--text-dark);        
    }
    .ice .ice-icon{
        color: var(--text-dark);
    }
    .dragon{
        background-color: var(--dragon);
        color: var(--text-dark);        
    }
    .dragon .dragon-icon{
        color: var(--text-dark);
    }
    .dark{
        background-color: var(--dark);
        color: var(--text-light);        
    }
    .dark .dark-icon{
        color: var(--text-light);
    }
    .fairy{
        background-color: var(--fairy);
        color: var(--text-light);        
    }
    .fairy .fairy-icon{
        color: var(--text-light);
    }
    .unk{
        background-color: var(--unk);
        color: var(--text-light);        
    }
    .unk .unk-icon{
        color: var(--text-light);
    }
    .shadow{
        background-color: var(--shadow);
        color: var(--text-light);        
    }
    .shadow .shadow-icon{
        color: var(--text-light);
    }
</style>