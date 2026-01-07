import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <div className="flex min-h-screen items-center justify-center font-sans">
            <div className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
                <h1 className="text-2xl">{t('title')}</h1>
                <Button variant={"secondary"}>Button</Button>
                <Button variant={"secondary"}>Button</Button>
                <Button variant={"secondary"}>Button</Button>
            </div>
        </div>
    );
}
