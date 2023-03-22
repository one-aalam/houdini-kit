<script lang="ts">
import type { PageData } from "./$houdini";
import ProductCard from "../components/ProductCard.svelte";

export let data: PageData

$: ({ Collection } = data )
</script>

<div class="collection-card flex flex-row mb-8 px-4 py-2">
    <img class="w-64" src={$Collection.data?.collection?.image?.url} alt=""/>
    <div class="collection-meta">
        <h2 class="text-4xl">{$Collection.data?.collection?.title }</h2>
        <p>{$Collection.data?.collection?.description }</p>
    </div>
</div>

{#if !$Collection?.data?.collection?.products?.edges.length}
    no products available!
{:else}
    <ul class="grid grid-cols-3 gap-4">
        {#each $Collection?.data?.collection?.products?.edges as product }
            <li>
                <ProductCard product={product?.node}/>
            </li>
        {/each}
    </ul>
{/if}


{#if $Collection.pageInfo.hasPreviousPage}
    <button on:click={async () => await Collection.loadPreviousPage()}>
        load prev page
    </button>
{/if}

{#if $Collection.pageInfo.hasNextPage}
    <button on:click={async () => await Collection.loadNextPage()}>
        load next page
    </button>
{/if}
