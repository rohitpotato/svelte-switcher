<script lang="ts">
	import Toggle from '$lib/Toggle.svelte';
	interface IExamples {
		title: string;
		fileName: string;
		html: string;
		key: string;
	}

	interface IComponentPropsMap {
		[key: string]: {
			withChildren?: boolean;
			withLabel?: boolean;
			isControlled?: boolean;
			hasCustomStyling?: boolean;
			props: any;
		};
	}

	export let controlledChecked = false;

	export let examples: IExamples[];
	console.log({ examples });
	const componentPropsMap: IComponentPropsMap = {
		WithIcons: {
			withChildren: true,
			props: {}
		},
		WithLabelTag: {
			withLabel: true,
			props: {
				id: 'svelte-toggle-with-label'
			}
		},
		ControlledUsage: {
			isControlled: true,
			props: {}
		},
		CustomStyling: {
			hasCustomStyling: true,
			props: {
				defaultChecked: true
			}
		}
	};
</script>

<div class="pb-20">
	<div class="text-white text-opacity-75 flex flex-col items-center justify-center mt-56">
		<h1 class="text-5xl">Usage and Examples</h1>
		<div>
			{#each examples as { title, fileName, html, key }}
				<div class="my-16">
					<div class="flex flex-row items-center gap-4">
						<h1 class="text-xl">{title}</h1>
						<div id={key}>
							{#if componentPropsMap[key]?.withChildren}
								<svelte:component this={Toggle}>
									<span slot="unchecked-component">&cross;</span>
									<span slot="checked-component">&check;</span>
								</svelte:component>
							{:else if componentPropsMap[key]?.withLabel}
								<div class="flex items-center gap-5">
									<svelte:component this={Toggle} {...componentPropsMap[key].props} />
									<label for="svelte-toggle-with-label" class="text-white">Click here!</label>
								</div>
							{:else if componentPropsMap[key]?.isControlled}
								<div class="flex items-center gap-5">
									<svelte:component
										this={Toggle}
										{...componentPropsMap[key].props}
										bind:checked={controlledChecked}
									/>
									<div class="border p-2 rounded-md">
										<input
											id="checkbox-controlled-component-example"
											type="checkbox"
											checked={controlledChecked}
											on:change={(event) => {
												// @ts-ignore
												controlledChecked = event.target.checked;
											}}
										/>
										<label for="checkbox-controlled-component-example"
											>Control toggle externally</label
										>
									</div>
								</div>
							{:else if componentPropsMap[key]?.hasCustomStyling}
								<Toggle checked={true} />
							{:else}
								<Toggle />
							{/if}
						</div>
					</div>
					<div class="mt-4">{@html html}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	div > :global(pre) {
		padding: 2rem;
		border-radius: 0.4rem;
	}

	#WithIcons > :global(.svelte-toggle .svelte-toggle--track-checked) {
		display: flex;
		align-items: center;
	}

	#WithIcons > :global(.svelte-toggle .svelte-toggle--track-unchecked) {
		display: flex;
		align-items: center;
	}

	#CustomStyling > :global(.svelte-toggle .svelte-toggle--track) {
		width: 60px;
		height: 30px;
		border-radius: 4px;
	}

	#CustomStyling > :global(.svelte-toggle .svelte-toggle--thumb) {
		height: 29px;
		width: 28px;
		border-radius: 4px;
	}

	#CustomStyling > :global(.svelte-toggle.svelte-toggle--checked .svelte-toggle--thumb) {
		left: 32px;
	}

	#CustomStyling > :global(.svelte-toggle.svelte-toggle--checked .svelte-toggle--track) {
		background-color: rgb(158, 42, 152);
	}

	#CustomStyling
		> :global(.svelte-toggle.svelte-toggle--checked:hover:not(.svelte-toggle--disabled)
			.svelte-toggle--track) {
		background-color: rgb(132, 3, 126) !important;
	}

	#CustomStyling
		> :global(.svelte-toggle:hover:not(.svelte-toggle--disabled) .svelte-toggle--track) {
		background-color: #4d4d4d !important;
	}
</style>
