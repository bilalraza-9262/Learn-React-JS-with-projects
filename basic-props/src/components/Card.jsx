
export default function Card({ author="Mustafa Raza", staff }) {
	return (
		<div className='w-8/12  m-auto'>
			<figure class=" md:flex bg-gray-400 rounded-xl p-8 md:p-0 dark:bg-slate-800">
				<img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/18882602/pexels-photo-18882602/free-photo-of-japan-wallpapers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
				<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
					<blockquote>
						<p class="text-lg font-medium">
							“Tailwind CSS is the only framework that I've seen scale
							on large teams. It’s easy to customize, adapts to any design,
							and the build size is tiny.”
						</p>
					</blockquote>
					<figcaption class="font-medium">
						<div class="text-teal-950 dark:text-sky-400">
							{author}
						</div>
						<div class="text-slate-700 dark:text-slate-500">
							{staff}
						</div>
					</figcaption>
				</div>
			</figure>
		</div>
	)
}
