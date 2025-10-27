
import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, I18nManager } from 'react-native';
import data from './data.json';

I18nManager.allowRTL(true);

export default function App() {
  const [category, setCategory] = useState(Object.keys(data)[0] || null);
  const categories = Object.keys(data);

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#f4f4f4'}}>
      <View style={styles.header}>
        <Text style={styles.title}>قائمة المقهى</Text>
      </View>
      <View style={styles.tabs}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:8}}>
          {categories.map((c) => (
            <TouchableOpacity key={c} style={[styles.tab, category===c&&styles.activeTab]} onPress={()=>setCategory(c)}>
              <Text style={styles.tabText}>{c}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={styles.list}>
        {(data[category] || []).map((item, idx) => (
          <View key={idx} style={styles.item}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={styles.itemName}>{item.get('اسم المنتج') || item.get('Name') || Object.values(item)[0]}</Text>
              <Text style={styles.itemRate}>{item.get('سعر') || item.get('Price') || ''}</Text>
            </View>
            {Object.entries(item).map(([k,v]) => (
              (k && v && !['اسم المنتج','سعر','Name','Price'].includes(k)) ? <Text key={k} style={styles.meta}>{k}: {String(v)}</Text> : null
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{padding:16, backgroundColor:'#fff', borderBottomWidth:1, borderColor:'#eee'},
  title:{fontSize:20, fontWeight:'700', textAlign:'center'},
  tabs:{paddingVertical:8, borderBottomWidth:1, borderColor:'#f0f0f0', backgroundColor:'#fff'},
  tab:{paddingHorizontal:12, paddingVertical:8, marginHorizontal:6, borderRadius:20, backgroundColor:'#f7f7f7'},
  activeTab:{backgroundColor:'#e6e6e6'},
  tabText:{fontSize:14},
  list:{padding:12},
  item:{padding:12, borderBottomWidth:1, borderColor:'#eee', marginBottom:6, borderRadius:8, backgroundColor:'#fff'},
  itemName:{fontSize:16, fontWeight:'600'},
  itemRate:{fontSize:14, color:'#333', marginTop:0},
  meta:{fontSize:12, color:'#666', marginTop:6}
});
