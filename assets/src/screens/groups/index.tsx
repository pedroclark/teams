
import { useState } from 'react';
import { Container ,Title } from './styles';
import {Header} from 'src/components/Header';
import { Highlight } from 'src/components/Highlight'
import { GroupCard } from 'src/components/GroupCard';
import { FlatList } from 'react-native';
import { ListEmpty } from 'src/components/ListEmpty/idex';
import { List } from 'phosphor-react-native';
import {Button} from 'src/components/Button';

export function Groups() {
        const [ groups, setGroups] = useState<string[]>([]);
        return (
        <Container>
                <Header />
                <Highlight
                        title="Turmas"
                        subtitle=" jogue com sua turma"
                />
                <FlatList
                        data ={ groups}
                        keyExtractor={item => item }
                        renderItem={({item}) =>(
                                <GroupCard title={item }
                                />
                        )}
                        contentContainerStyle={groups.length === 0 && {flex:1} }
                        ListEmptyComponent={() => 
                        <ListEmpty 
                        message=' cadastre a primeira turma '/>}
                />
                <Button
                        title='criar nova turma '
                />
                
        </Container>
        );
}   