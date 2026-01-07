import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <div className="flex min-h-screen items-center justify-center font-sans">
            <div className="">
                <h1 className="text-2xl ">{t('title')}</h1>
                <Button variant={"secondary"}>Button</Button>
            </div>
        </div>
    );
}
