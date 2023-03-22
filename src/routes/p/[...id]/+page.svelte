<script lang="ts">
import type { PageData } from "./$houdini"
import ProductFull from "../../../components/ProductFull.svelte";

export let data: PageData

$: ({ ProductDetail } = data )

</script>
{#if $ProductDetail.fetching}
    <span>loading...</span>
{:else}

<ProductFull product={$ProductDetail.data?.product} />
{/if}
