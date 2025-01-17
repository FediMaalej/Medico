


import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const items = [
  {
    label : 'Patient',
    description : 'Register as a Patient so you can find pharmacies and purchase drugs',
    icon : ''
  },
  {
    label : 'Pharmacy',
    description : 'Register as a Pharmacy so you can sell and manage your drugs on the app.',
    icon : ''
  },
  {
    label : 'Doctor',
    description : 'Register as a Doctor so you can ...',
    icon : ''
  }
]

export default function UserProfile({ navigation }) {
  const [value, setValue] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Select your account type</Text>

        {items.map(({ label, description, icon }, index) => {
          const isActive = value === index;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setValue(index);
              }}>
              <View style={[styles.radio, isActive && styles.radioActive]}>
                <Text style={styles.radioLabel}>{label}</Text>

    
                <View style={styles.radioBadge}>
                  <Text style={styles.radioBadgeText}>{icon}</Text>
                </View>

                <Text style={styles.radioDescription}>{description}</Text>

                <View
                  style={[
                    styles.radioInput,
                    isActive && styles.radioInputActive,
                  ]}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
    alignItems:'center',
  },
  radio: {
    marginTop :30 ,
    position: 'relative',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 16,
    borderRadius: 25,
    alignItems: 'flex-start',
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  radioActive: {
    borderColor: "#007260",
  },
  radioLabel: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: "#007260",
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  radioPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2f2f2f',
    marginBottom: 12,
  },
  radioBadge: {
    backgroundColor: "#007260",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  radioBadgeText: {
    fontSize: 15,
    fontWeight: '500',
    color:"#007260",
  },
  radioDescription: {
    fontSize: 15,
    fontWeight: '500',
    color: '#848a96',
  },
  radioInput: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 24,
    height: 24,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#007260",
  },
  radioInputActive: {
    borderWidth: 7,
    borderColor: "#007260",
  },
});