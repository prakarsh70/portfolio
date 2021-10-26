import {useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },5000)
    }, [])
    return ( <div>
        <h1>This is not the right place, please go back to your dimention</h1>
        <p>Go back to </p><Link href='/'>Homepage</Link>
    </div> );
}
 
export default NotFound;