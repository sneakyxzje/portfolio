import { goto } from '$app/navigation';

export type CommandResult = {
	type: 'text' | 'help_list' | 'error' | 'user_input';
	content: any;
};

export function processCommand(cmd: string): CommandResult {
	const cleanCmd = cmd.trim().toLowerCase();
	switch (cleanCmd) {
		case 'help':
			return {
				type: 'help_list',
				content: [
					{ cmd: 'whoami', desc: 'Display my information.' },
					{ cmd: 'contact', desc: 'Get in touch.' },
					{ cmd: 'clear', desc: 'Clear the console.' }
				]
			};

		case 'whoami':
			return {
				type: 'text',
				content: 'Ngo Tuan Dat (alias: sneaky, sneaki.) - software engineer.'
			};
		case 'contact':
			return {
				type: 'text',
				content: 'facebook.com/dattuan1611 | tuandattobi@gmail.com.'
			};

		default:
			return {
				type: 'error',
				content: `Unknown command "${cmd}". Use "help" to see available commands.`
			};
	}
}
