<script lang="ts">
    import logo from '$lib/logo1.png';
    import BurgerMenu from './BurgerMenu.svelte';

    let MenuOpen = false;

    const ToggleMenu = () =>{
        MenuOpen = !MenuOpen;
    };
</script>

<header>
    <div class= "header">
        <div class = "center">
            <a href = "/">
                <img src={logo} alt="Gokart"/>
            </a>
            <nav class={MenuOpen ? 'open' : ''}>
                <ul>
                    <li><a href= "/about">Rólunk</a></li>
                    <li><a href= "/ranglist">Ranglista</a></li>
                    <li><a href= "/booking">Időpontfoglalás</a></li>
                    <li><a href= "/rating">Vélemények</a></li>
                </ul>
            </nav>    
        </div>
        <div class= "right">
            <BurgerMenu {MenuOpen} {ToggleMenu} />
        </div>
    </div>
</header>



<style>
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        background-color: #111111;
        box-shadow: 0 0 10px 0;
    }
    .center{
        gap: 2rem;
        display: flex;
        align-items: center;
    }
    nav ul{
        list-style: none;
        display: flex;
        gap: 2.5rem;
        padding: 0;
        margin: 0;
    }
    nav a{
        text-decoration: none;
        color: #FFFFFF;
        font-weight: bold;
        font-size: large;
    }
    nav a:hover{
        color: rgb(173, 173, 173);
    }
    :global(body) {
        margin: 0;
    }
    img{
        width: 140px;
    }

    @media(max-width: 768px){
        nav{
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transition: all 0.3s ease;
            flex-direction: column;
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background-color: #111111;
            padding: 0 1rem;
            z-index: 10;
        }
        nav.open{
            display: flex;
            opacity: 1;
            padding: 1rem;
            max-height: 400px;
        }
        nav ul{
            flex-direction: column;
            gap: 1rem;
        }
        .center{
            flex: 1;
            justify-content: space-between;
            width: 100%;
        }
    }
</style>