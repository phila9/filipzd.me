import Page from '@/components/page'
import Section from '@/components/section'

const Index = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				Hey 👋 I'm Filip Zdravkovic.
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400 mt-6'>
					I love building beautiful interfaces, web apps, and everything in between!{' '}
					{/* <span className='font-medium text-zinc-900 dark:text-zinc-50'>
						
					</span>{' '} */}
				</p>

				<p className='text-zinc-600 dark:text-zinc-400 mt-6'>
					As a web developer, I enjoy bridging the gap between development and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.
				</p>

				<p className='text-zinc-600 dark:text-zinc-400 mt-6'>
					Currently I am helping build innovative solutions for restaurants and delivery services{' '}
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
					<a target="_blank" rel="noopener noreferrer" href="https://get-sides.nl" >@SIDES.</a>
					</span>
				</p>

				<p className='text-zinc-600 dark:text-zinc-400 mt-6'>
					As my side project, I help small businesses get the big business treatment{' '}
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
					<a target="_blank" rel="noopener noreferrer" href="https://rakia.rocks" >@Rakia.</a>
					</span>
				</p>

				<br />

				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a
						href='https://linkedin.com/in/filipzd/'
						className='underline'
						target="_blank" rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					<a
						href='https://github.com/phila9'
						className='underline ml-10'
						target="_blank" rel="noopener noreferrer"
					>
						GitHub
					</a>
				</p>

				<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200 mt-10'>
				Projects 🚀
				</h2>

				<div className='text-sm text-zinc-600 dark:text-zinc-400 mt-6'>
					<a
						className='text-md underline font-semibold text-zinc-800 dark:text-zinc-200'
						href='https://rakia.rocks'
						target="_blank" rel="noopener noreferrer"
					>
						Rakia
					</a>
					<p className='text-zinc-600 dark:text-zinc-400 mt-2 mb-6'>
					I help small businesses get the big business treatment, providing high quality web development services - no page builders or WordPress - everything is 100% hand-coded for maximum performance and efficiency. 
					</p>
					<a
						className='text-md underline font-semibold text-zinc-800 dark:text-zinc-200'
						href='https://linkedin.com/in/filipzd/'
						target="_blank" rel="noopener noreferrer"
					>
						SwapToy
					</a>
					<p className='text-zinc-600 dark:text-zinc-400 mt-2 mb-6'>
					After years of working in supply-chain field, and coding simple HTML & CSS websites in my spare time, I decided to step up, and make software development my full-time career. In September 2021 I joined a Full-Stack bootcamp in Amsterdam. This was my final project before graduating.
					</p>
				</div>

			</div>
		</Section>
	</Page>
)

export default Index
