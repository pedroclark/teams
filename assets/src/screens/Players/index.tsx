import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@Components/Highlight";
import { ButtonIcon } from "src/components/ButtonIcon";
import { Input } from "src/components/input";
import { Filter } from "src/components/Filter";
import { Header } from "@Components/Header";
import { FlatList, PermissionsAndroid } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@Components/PlayerCard";
import { ListEmpty } from "@Components/ListEmpty/idex";
import { Button } from "@Components/Button";


export function Players(){
    const [ team, SetTeam] = useState('time A')
    const [players, setPlayers] =useState(['PEDRO' , 'RODRIGO '])
    return(
            <Container>
                <Header showBackButton/>
                <Highlight 
                    title='nome da turma'
                    subtitle='adicione a galera e separe os time'
                />
            <Form>
                <Input
                    placeholder=" Nome da pessoa"
                    autoCorrect={false}
                />
                <ButtonIcon
                    icon="add"
                />
            </Form>
            <HeaderList>
                <FlatList
                    data={['time A' , 'time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                        title={item}
                        isActive={item === team}
                        onPress={()=> SetTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>

            </HeaderList>
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({item }) => (
                    <PlayerCard 
                    name={item}
                    onRemove={()=> {}}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty 
                    message=' Não há pessoas nesse time '
                    />
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom:100 },
                    players.length === 0 && {flex:1}
                
                ]}
            />
                <Button
                    title='remover turma '
                    type='SECONDARY'
                />
            </Container>
    )
}