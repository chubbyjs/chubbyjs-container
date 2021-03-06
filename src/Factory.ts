import FactoryInterface from './FactoryInterface';
import PsrContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';

const Factory = (previous: FactoryInterface, factory: FactoryInterface): FactoryInterface => {
    return (container: PsrContainerInterface) => {
        return factory(container, previous);
    };
};

export default Factory;
