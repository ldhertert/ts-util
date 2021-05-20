import execa from 'execa';

(async () => {
	// Catching an error
	try {
        const child = execa('echo', ['unicorns'])
        child.stdout?.pipe(process.stdout);
        child.stderr?.pipe(process.stderr)
        await child

        console.log((await execa.command('echo unicorns')).stdout)

		await execa('unknown', ['command']);
	} catch (error) {
		console.log(error);
		/*
		{
			message: 'Command failed with ENOENT: unknown command spawn unknown ENOENT',
			errno: -2,
			code: 'ENOENT',
			syscall: 'spawn unknown',
			path: 'unknown',
			spawnargs: ['command'],
			originalMessage: 'spawn unknown ENOENT',
			shortMessage: 'Command failed with ENOENT: unknown command spawn unknown ENOENT',
			command: 'unknown command',
			stdout: '',
			stderr: '',
			all: '',
			failed: true,
			timedOut: false,
			isCanceled: false,
			killed: false
		}
		*/
	}

})();